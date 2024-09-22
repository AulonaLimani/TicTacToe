import { useGetAllPlayersQuery } from "../../gql/generated";
import styles from "./Leaderboard.module.css";
import { LeaderboardPlayer } from "./LeaderboardPlayer";
import { useNavigate } from "react-router-dom";

export const Leaderboard = (): JSX.Element => {
  const navigate = useNavigate();

  const { data: allPlayers } = useGetAllPlayersQuery();

  return (
    <div className={styles.leaderboardContainer}>
      <div className={styles.header}>
        <div
          className={styles.back}
          onClick={() => {
            navigate("/");
          }}
        >
          <p>{`<Back`}</p>
        </div>
        <h1>Leaderboard</h1>
      </div>
      <div className={styles.leaderboard}>
        {allPlayers?.getPlayers.map((player) => (
          <LeaderboardPlayer key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};
