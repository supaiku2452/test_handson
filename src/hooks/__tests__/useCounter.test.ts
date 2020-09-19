import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../useCounter";

jest.useFakeTimers();

afterAll(() => jest.clearAllTimers());

describe("useCounter test.", () => {
  test("mount", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.value).toEqual(0);
  });

  test("mount with initial value", () => {
    const initialValue = 10;
    const { result } = renderHook(() => useCounter(initialValue));
    expect(result.current.value).toEqual(10);
  });

  test("increment", () => {
    const { result } = renderHook(() => useCounter());
    act(() => result.current.increment());
    expect(result.current.value).toEqual(1);
  });

  test("decrement", () => {
    const { result } = renderHook(() => useCounter(10));
    act(() => result.current.decrement());
    expect(result.current.value).toEqual(9);
  });

  test("dealyIncrement", () => {
    const { result } = renderHook(() => useCounter());
    result.current.delayIncrement();
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(result.current.value).toEqual(1);
  });
});
