export type SignType = "x" | "o" | "d" | "";

export interface NodeType {
  checked: boolean;
  sign: SignType;
  won: boolean;
}

export interface ScoreType {
  x: number;
  o: number;
}

export interface Players {
  player_one: string;
  player_two: string;
  sign_one: string;
  sign_two: string;
}
