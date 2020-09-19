import { useCallback, useEffect, useState } from "react";

const useLogin = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(() => userId.length === 0 || password.length === 0);
  }, [userId, password]);

  const regist = useCallback(() => {
    console.log(`${userId} ${password}`);
  }, [userId, password]);

  return {
    userId,
    password,
    onChangeUserId: setUserId,
    onChangePassword: setPassword,
    regist,
    hasError,
  };
};

export { useLogin };
