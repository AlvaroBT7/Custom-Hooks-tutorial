import useCounter from "../hooks/useCounter";
import "../stylesheets/Card.css";

const Card = () => {
  const [counter, addPoints, hasGlow] = useCounter();
  return (
    <div
      onClick={addPoints}
      className={`Card ${hasGlow ? "hasGlow" : ""}`.trim()}
    >
      Card component: {counter}
    </div>
  );
};

export default Card;
