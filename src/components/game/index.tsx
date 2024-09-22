import { useContext, useState } from "react";
import "./index.css";
import SignCard from "./SignCard";
import { NodeType, ScoreType, SignType } from "./types";
import { capitalFormatter } from "../../helpers/capitalFormater";
import { Buttons } from "./Buttons";
import { Header } from "./Header";
import { Board } from "./Board";
import { useParams } from "react-router-dom";
import {
  useLoginLazyQuery,
  useGetPlayerByIdQuery,
  useOnWinMutation,
  useRegisterMutation,
} from "../../gql/generated";
import { boardFormatter } from "./helpers/boardFormatter";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import CryptoJS from "crypto-js";
import SessionContext from "../../SessionContext";

const defaultNode: NodeType = { checked: false, sign: "", won: false };
const createDefaultBoard = (): NodeType[][] => [
  [defaultNode, defaultNode, defaultNode],
  [defaultNode, defaultNode, defaultNode],
  [defaultNode, defaultNode, defaultNode],
];

const scoreFormatter = (score: string): ScoreType => {
  const [x, o] = score.split("-").map((s) => Number.parseInt(s));
  return { x, o };
};

export const Game = () => {
  const { playerId } = useParams();
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [goHome, setGoHome] = useState(false);
  const [goGames, setGoGames] = useState(false);
  const [board, setBoard] = useState<NodeType[][]>(createDefaultBoard());

  const { id: contextId, update: updateContext } = useContext(SessionContext);

  const [updatePlayerOnWin] = useOnWinMutation();

  const handleUpdatePlayer = async (score: string, id?: string) => {
    if (!id) return;
    const formatedBoard = boardFormatter(board);
    updatePlayerOnWin({
      variables: {
        id: Number.parseInt(id),
        score,
        board: formatedBoard,
      },
    });
  };

  const [login] = useLoginLazyQuery();

  const [register] = useRegisterMutation();

  const { data: getPlayerData, loading: loginLoading } = useGetPlayerByIdQuery({
    variables: {
      id: Number.parseInt(playerId ?? "0"),
    },
    onCompleted: (data) => {
      if (data.getPlayer?.loged_in === false) {
        setLoggedIn(true);
      }
    },
    skip: !playerId,
  });

  const {
    player_one: p1 = "Player one",
    player_two: p2 = "Player two",
    sign_one: s1 = "x",
    sign_two: s2 = "o",
    score: defaultScore,
    loged_in: logedin = false,
  } = getPlayerData?.getPlayer ?? {};

  const initialScore = scoreFormatter(defaultScore ?? "0-0");

  const [count, setCount] = useState<number>(1);
  const [score, setScore] = useState<ScoreType>(initialScore);
  const [winner, setWinner] = useState<SignType>("");

  const homeButton = () => {
    if (logedin === false) {
      setLoggedIn(false);
      setGoHome(true);
      return;
    }
    navigate("/");
  };

  const homeFunction = () => {
    navigate("/");
  };

  const registerFunction = async (
    password: string,
    handleSubmiting: (submit: boolean) => void
  ) => {
    let registered = false;

    handleSubmiting(true);
    const hash = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);

    if (goHome || goGames) {
      await register({
        variables: {
          id: Number.parseInt(playerId ?? "0"),
          password: hash,
        },
        onCompleted: () => {
          alert("Registered successfully!");
          updateContext(Number.parseInt(playerId ?? "0"));
          navigate(goHome ? "/" : `/games/${playerId}`);
          registered = true;
        },
      });
      if (registered) return;
      handleSubmiting(false);
      alert("Failed to register!");
      return;
    } else {
      await login({
        variables: {
          id: Number.parseInt(playerId ?? "0"),
          password: hash,
        },
        onCompleted: (data) => {
          if (data.login === null) {
            alert("Wrong password!");
            handleSubmiting(false);
            return;
          }
          alert("Logged in successfully!");
          updateContext(Number.parseInt(playerId ?? "0"));
          setLoggedIn(true);
          return;
        },
      });
    }
  };

  const restartState = () => {
    setCount(1);
    setWinner("");
    setBoard(createDefaultBoard());
  };

  const viewGames = (): void => {
    if (logedin === false) {
      setLoggedIn(false);
      setGoGames(true);
      return;
    }
    navigate(`/games/${playerId}`);
  };

  const onWin = (gameWinner: SignType) => {
    if (gameWinner === "x") {
      handleUpdatePlayer(`${score.x + 1}-${score.o}`, playerId);
      setScore({ x: score.x + 1, o: score.o });
      setWinner(gameWinner);
      return;
    }
    handleUpdatePlayer(`${score.x}-${score.o + 1}`, playerId);
    setScore({ x: score.x, o: score.o + 1 });
    setWinner(gameWinner);
  };

  const getWinnerName = () => {
    if (winner === "x") {
      return p1;
    }
    return p2;
  };

  const turnToPlay = count + score.x + score.o;

  if (loginLoading)
    return <div style={{ color: "white" }}>Game Loading...</div>;
  if (!loggedIn && !contextId)
    return (
      <LoginForm
        buttonText={goHome || goGames ? "Register" : "Login"}
        homeFunction={homeFunction}
        registerFunction={registerFunction}
      />
    );

  return (
    <div className="gameBodyContainer">
      <SignCard
        draw={winner === "d"}
        score={score.x}
        sign={s1}
        lighed={turnToPlay % 2 !== 0 || winner === "d"}
        winner={winner === "x"}
      />
      <div className="gameMainContainer">
        <Header
          won={winner === "x" || winner === "o"}
          draw={winner === "d"}
          winnerName={capitalFormatter(getWinnerName())}
        />
        <Board
          board={board}
          signs={{ x: s1, o: s2 }}
          gameEnd={winner !== ""}
          setBoard={setBoard}
          setCountPlusOne={() => {
            setCount(count + 1);
          }}
          turnToPlay={turnToPlay}
          onWin={onWin}
          count={count}
        />
        <Buttons
          homeButton={homeButton}
          restartState={restartState}
          viewGames={viewGames}
        />
      </div>
      <SignCard
        draw={winner === "d"}
        score={score.o}
        sign={s2}
        lighed={turnToPlay % 2 === 0 || winner === "d"}
        winner={winner === "o"}
      />
    </div>
  );
};
