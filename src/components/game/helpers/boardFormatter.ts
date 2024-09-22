import { NodeType, SignType } from "../types";

export const boardFormatter = (board: NodeType[][]): string => {
  let formattedBoard = "";
  for (const row of board) {
    for (const node of row) {
      formattedBoard += node.checked ? node.sign : "e";
    }
  }
  return formattedBoard;
};

export const boardParser = (board: string): NodeType[][] => {
  const parsedBoard: NodeType[][] = [];

  for (let i = 0; i < 3; i++) {
    parsedBoard.push([]);
    for (let j = 0; j < 3; j++) {
      const checked = board[i * 3 + j] !== "e";
      parsedBoard[i].push({
        checked: checked,
        sign: checked ? (board[i * 3 + j] as SignType) : "",
        won: false,
      });
    }
  }

  return parsedBoard;
};
