import React from "react";
import { useLogin } from "./useLogin";

const LoginForm = () => {
  const {
    userId,
    password,
    onChangeUserId,
    onChangePassword,
    regist,
    hasError,
  } = useLogin();

  return (
    <div>
      <h1>Login Form</h1>
      <div>
        <div>
          <input
            data-testid="user-id"
            type="text"
            value={userId}
            onChange={(e) => onChangeUserId(e.target.value)}
          />
        </div>
        <div>
          <input
            data-testid="password"
            type="password"
            value={password}
            onChange={(e) => onChangePassword(e.target.value)}
          />
        </div>

        <button
          data-testid="register"
          type="button"
          onClick={regist}
          disabled={hasError}
        >
          regist
        </button>
      </div>
    </div>
  );
};

export { LoginForm };
