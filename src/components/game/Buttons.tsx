interface P {
  homeButton: () => void;
  restartState: () => void;
  viewGames: () => void;
}

export const Buttons = ({
  homeButton,
  restartState,
  viewGames,
}: P): JSX.Element => (
  <div className="buttonsContainer">
    <button className="restart" onClick={homeButton}>
      {`<`} Home
    </button>
    <button className="restart" onClick={restartState}>
      Restart board
    </button>
    <button className="restart" onClick={viewGames}>
      Games
    </button>
  </div>
);
