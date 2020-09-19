import { useCallback, useState } from "react";

const useCounter = (initalValue = 0) => {
  const [value, setValue] = useState(initalValue);
  const increment = useCallback(() => setValue((value) => value + 1), []);
  const decrement = useCallback(() => setValue((value) => value - 1), []);

  const delayIncrement = useCallback(() => {
    setTimeout(() => setValue((value) => value + 1), 1000);
  }, []);

  return {
    value,
    increment,
    decrement,
    delayIncrement,
  };
};

export { useCounter };
