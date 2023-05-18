import useCounter from "../hooks/useCounter";
import "../stylesheets/Title.css";

const Title = ({ text }) => {
  const [contador, updateCounter, tieneBrillo] = useCounter();
  return (
    <h1
      onClick={updateCounter}
      className={`Title ${tieneBrillo ? "tieneBrillo" : ""}`.trim()}
    >
      {text} {contador}
    </h1>
  );
};

export default Title;
