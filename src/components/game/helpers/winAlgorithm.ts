import { NodeType, SignType } from "../types";

interface winAlgorithmInputs {
  board: NodeType[][];
  count?: number;
  setWinner?: (winner: string) => void;
  onWin?: (sign: SignType) => void;
}

export const winAlgorithm = ({
  board,
  count,
  setWinner,
  onWin,
}: winAlgorithmInputs): NodeType[][] => {
  let newBoard = [...board];

  const setWonNodes = (nodes: number[][]) => {
    nodes.forEach(([row, col]) => {
      newBoard[row][col] = { ...newBoard[row][col], won: true };
    });
  };

  for (let i = 0; i < 2; i++) {
    if (
      newBoard[i][0].checked &&
      newBoard[i][0].sign === newBoard[i][1].sign &&
      newBoard[i][0].sign === newBoard[i][2].sign
    ) {
      setWonNodes([
        [i, 0],
        [i, 1],
        [i, 2],
      ]);
      onWin?.(newBoard[i][0].sign);
      return newBoard;
    }

    if (
      newBoard[0][i].checked &&
      newBoard[0][i].sign === newBoard[1][i].sign &&
      newBoard[0][i].sign === newBoard[2][i].sign
    ) {
      setWonNodes([
        [0, i],
        [1, i],
        [2, i],
      ]);
      onWin?.(newBoard[0][i].sign);
      return newBoard;
    }
  }

  if (
    newBoard[0][0].checked &&
    newBoard[0][0].sign === newBoard[1][1].sign &&
    newBoard[0][0].sign === newBoard[2][2].sign
  ) {
    setWonNodes([
      [0, 0],
      [1, 1],
      [2, 2],
    ]);
    onWin?.(newBoard[0][0].sign);
    return newBoard;
  }

  if (
    newBoard[0][2].checked &&
    newBoard[0][2].sign === newBoard[1][1].sign &&
    newBoard[0][2].sign === newBoard[2][0].sign
  ) {
    setWonNodes([
      [0, 2],
      [1, 1],
      [2, 0],
    ]);
    onWin?.(newBoard[0][2].sign);
    return newBoard;
  }

  if (count === 9) {
    setWinner?.("d");
  }
  return newBoard;
};
