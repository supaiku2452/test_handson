import React from "react";
import { fireEvent, getByTestId, render } from "@testing-library/react";
import { LoginForm } from "../LoginForm";
import userEvent from "@testing-library/user-event";

describe("LoginForm", () => {
  test("register button is disabled when user id is invalid", () => {
    const { getByTestId } = render(<LoginForm />);
    const userId = getByTestId(/user-id/i) as HTMLInputElement;
    fireEvent.change(userId, {
      target: {
        value: "user",
      },
    });
    // debug(userId);
    expect(userId.value).toEqual("user");
    const submit = getByTestId(/register/i) as HTMLInputElement;
    // debug(submit);
    expect(submit.disabled).toBe(true);
  });
  test("register button is disabled when password is invalid", () => {
    const { getByTestId } = render(<LoginForm />);
    const password = getByTestId(/password/i) as HTMLInputElement;
    fireEvent.change(password, {
      target: {
        value: "password",
      },
    });
    // debug(password);
    expect(password.value).toEqual("password");
    const submit = getByTestId(/register/i) as HTMLInputElement;
    // debug(submit);
    expect(submit.disabled).toBe(true);
  });
  test("register button is enabled when password and userid are valid", () => {
    const { getByTestId } = render(<LoginForm />);
    const userId = getByTestId(/user-id/i) as HTMLInputElement;
    fireEvent.change(userId, {
      target: {
        value: "user",
      },
    });
    // debug(userId);
    expect(userId.value).toEqual("user");
    const password = getByTestId(/password/i) as HTMLInputElement;
    fireEvent.change(password, {
      target: {
        value: "password",
      },
    });
    const submit = getByTestId(/register/i) as HTMLInputElement;
    // debug(submit);
    // expect(submit.disabled).toBe(false);
    expect(submit).not.toBeDisabled();
  });
});
