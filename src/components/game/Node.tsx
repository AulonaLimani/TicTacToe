import Sign from "./Sign";
import { NodeType, SignType } from "./types";

function Node({
  signs,
  node,
  count,
  setNode,
  gameEnd,
}: {
  signs: { x: string; o: string };
  node: NodeType;
  count: number;
  setNode: (arg: NodeType) => void;
  gameEnd: boolean;
}) {
  const getSign = (nodeSign: SignType) => {
    if (nodeSign === "x") {
      return signs.x;
    }
    return signs.o;
  };

  return (
    <div
      role="button"
      onClick={() => {
        if (!node.checked && !gameEnd) {
          setNode({
            checked: true,
            sign: count % 2 === 0 ? "o" : "x",
            won: node.won,
          });
        }
      }}
      className={`node ${
        node.checked && (node.sign === "x" ? "clickedBlue" : "clickedRed")
      } ${node.won && "won"}`}
    >
      <Sign
        checked={node.checked}
        sign={getSign(node.sign).toLocaleUpperCase()}
      />
    </div>
  );
}

export default Node;
