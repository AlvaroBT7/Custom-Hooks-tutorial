import { useState } from "react";
import { useEffect } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);
  const [hasGlow, setHasGlow] = useState(false);

  useEffect(() => {
    setHasGlow(true);
    setTimeout(() => {
      setHasGlow(false);
    }, 1000);
  }, [counter]);

  const handleClick = () => setCounter(counter + 1);
  return [counter, handleClick, hasGlow];
};

export default useCounter;
