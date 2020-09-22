import { useState } from "react";

const useFavoriteNumber = () => {
  const [number, setNumber] = useState(0);
  return {
    number,
    setNumber,
  };
};

export { useFavoriteNumber };
