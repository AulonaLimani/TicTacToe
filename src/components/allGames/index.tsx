import { useNavigate, useParams } from "react-router-dom";
import { useGetPlayerByIdQuery, useLoginLazyQuery } from "../../gql/generated";
import classes from "./index.module.css";
import { Board } from "../game/Board";
import { boardParser } from "../game/helpers/boardFormatter";
import { winAlgorithm } from "../game/helpers/winAlgorithm";
import { useContext, useState } from "react";
import { LoginForm } from "../game/LoginForm";
import CryptoJS from "crypto-js";
import SessionContext from "../../SessionContext";

export const AllGames = (): JSX.Element => {
  const { playerId } = useParams();
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const { id: contextId, update: updateContext } = useContext(SessionContext);

  const { data: getPlayerData, loading: gamesLoading } = useGetPlayerByIdQuery({
    variables: {
      id: Number.parseInt(playerId ?? "0"),
    },
    fetchPolicy: "network-only",
    skip: !playerId,
  });

  const [login] = useLoginLazyQuery();

  const homeFunction = () => {
    navigate(-1);
  };

  const registerFunction = async (
    password: string,
    handleSubmiting: (submit: boolean) => void
  ) => {
    handleSubmiting(true);
    const hash = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
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
  };

  if (gamesLoading)
    return <div style={{ color: "white" }}>Games Loading...</div>;

  if (!loggedIn && contextId !== Number.parseInt(playerId ?? "0"))
    return (
      <LoginForm
        buttonText="Login"
        homeFunction={homeFunction}
        registerFunction={registerFunction}
      />
    );

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <button
          className={classes.backButton}
          onClick={() => {
            navigate(-1);
          }}
        >{`<Back`}</button>
        All Games
        <button
          className={classes.backButton}
          onClick={() => {
            navigate(`/game/${playerId}`);
          }}
        >
          Play another game
        </button>
      </div>
      <div className={classes.allGamesContainer}>
        {getPlayerData?.getPlayer?.Games &&
          getPlayerData?.getPlayer?.Games.map(({ id, board }) => (
            <Board
              key={id}
              board={winAlgorithm({ board: boardParser(board) })}
              gameEnd={true}
              className={classes.allGamesItem}
            />
          ))}
      </div>
    </div>
  );
};
