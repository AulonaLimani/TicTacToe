import { useNavigate } from "react-router-dom";
import { GetAllPlayersQuery } from "../../gql/generated";
import styles from "./Leaderboard.module.css";

interface P {
  player: GetAllPlayersQuery["getPlayers"][number];
}

export const LeaderboardPlayer = ({ player }: P): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.leaderboardRow}
      onClick={() => {
        if (player.loged_in === false) return;
        navigate(`/games/${player.id}`);
      }}
    >
      <div className={styles.playerContainer}>
        <p className={styles.playerName}>{player.player_one}</p>
        <p className={styles.playerSign}>
          {player.sign_one.toLocaleUpperCase()}
        </p>
      </div>
      <div className={styles.scoreContainer}>
        <p className={styles.score}>{player.score.split("-")[0]}</p>
        <p className={styles.vs}>VS</p>
        <p className={styles.score}>{player.score.split("-")[1]}</p>
      </div>
      <div className={styles.playerContainer}>
        <p className={styles.playerName}>{player.player_two}</p>
        <p className={styles.playerSign}>
          {player.sign_two.toLocaleUpperCase()}
        </p>
      </div>
    </div>
  );
};
