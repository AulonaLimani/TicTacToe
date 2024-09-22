function SignCard({
  sign,
  lighed,
  winner,
  draw,
  score,
}: {
  sign: string;
  lighed: boolean;
  winner: boolean;
  draw: boolean;
  score: number;
}) {
  return (
    <div
      className={`signCardContainer ${lighed && !winner && "lighed"} ${
        winner && "wonSignCard"
      } ${draw && "draw"}`}
    >
      <>
        <div className="signCardSign">{sign}</div>
        <div className="score">{score}</div>
      </>
    </div>
  );
}

export default SignCard;
