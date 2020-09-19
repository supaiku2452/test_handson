import { useCallback, useState } from "react";

const useFetchXXX = () => {
  const [data, setData] = useState("");

  const call = useCallback(() => {
    Promise.resolve("test").then((v) => setData(v));
  }, []);

  return {
    data,
    call,
  };
};

export { useFetchXXX };
