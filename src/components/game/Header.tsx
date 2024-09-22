interface P {
  won: boolean;
  draw: boolean;
  winnerName: string;
}

export const Header = ({ won, draw, winnerName }: P) => (
  <div className="containerHeader">
    {won ? (
      <>{winnerName} won the game</>
    ) : draw ? (
      <>Draw</>
    ) : (
      <p>Tic Tac Toe</p>
    )}
  </div>
);
