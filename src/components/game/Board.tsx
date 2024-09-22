import Node from "./Node";
import { NodeType, SignType } from "./types";
import { winAlgorithm } from "./helpers/winAlgorithm";

interface P {
  board?: NodeType[][];
  signs?: { x: string; o: string };
  gameEnd?: boolean;
  setBoard?: (board: NodeType[][]) => void;
  setCountPlusOne?: () => void;
  turnToPlay?: number;
  className?: string;
  onWin?: (sign: SignType) => void;
  count?: number;
  setWinner?: (winner: string) => void;
}

export const Board = ({
  board,
  signs,
  gameEnd,
  setBoard,
  setCountPlusOne,
  turnToPlay,
  className,
  onWin,
  count,
  setWinner,
}: P) => (
  <div className={`gameContainer ${className}`}>
    {board?.map((row, rowIndex) => (
      <div className="row" key={rowIndex}>
        {row.map((node, colIndex) => (
          <Node
            key={`${rowIndex}-${colIndex}`}
            signs={{ x: signs?.x ?? "x", o: signs?.o ?? "o" }}
            gameEnd={gameEnd ?? true}
            node={node}
            setNode={(updatedNode: NodeType) => {
              const newBoard = [...board];
              newBoard[rowIndex][colIndex] = updatedNode;
              setCountPlusOne?.();
              setBoard?.(
                winAlgorithm({
                  board: newBoard,
                  onWin,
                  setWinner,
                  count,
                })
              );
            }}
            count={turnToPlay ?? 1}
          />
        ))}
      </div>
    ))}
  </div>
);
