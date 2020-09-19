import { act, renderHook } from "@testing-library/react-hooks";
import { useLogin } from "../useLogin";

describe("useLogin test", () => {
  test("mount", () => {
    const { result } = renderHook(() => useLogin());
    expect(result.current.userId).toEqual("");
    expect(result.current.password).toEqual("");
  });

  test("user id and password update", () => {
    const { result } = renderHook(() => useLogin());
    act(() => {
      result.current.onChangeUserId("user id");
      result.current.onChangePassword("password");
    });

    expect(result.current.userId).toEqual("user id");
    expect(result.current.password).toEqual("password");
  });
  test.each([
    { userId: "", password: "", expected: true },
    { userId: "a", password: "", expected: true },
    { userId: "", password: "a", expected: true },
    { userId: "a", password: "a", expected: false },
  ])("validate to user id and password.", (param) => {
    const { result } = renderHook(() => useLogin());
    act(() => {
      result.current.onChangeUserId(param.userId);
      result.current.onChangePassword(param.password);
    });

    expect(result.current.hasError).toEqual(param.expected);
  });
});
