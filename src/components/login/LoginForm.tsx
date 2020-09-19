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
          <label>user id</label>
          <input
            name="userId"
            value={userId}
            onChange={(e) => onChangeUserId(e.target.value)}
          />
        </div>
        <div>
          <label>password</label>
          <input
            name="userId"
            type="password"
            value={password}
            onChange={(e) => onChangePassword(e.target.value)}
          />
        </div>

        <button type="button" onClick={regist} disabled={hasError}>
          regist
        </button>
      </div>
    </div>
  );
};

export { LoginForm };
