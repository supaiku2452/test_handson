import { isJsxElement } from "typescript";
import { forEach, timer } from "../utils";

describe("utils tests.", () => {
  test("forEach mock test", () => {
    const items = [1, 2, 3];
    const callback = jest.fn();
    forEach(items, callback);
    console.log(callback.mock);
    expect(callback).toHaveBeenCalledTimes(items.length);
  });

  test("correct timer mock test", () => {
    jest.useFakeTimers();
    const callback = jest.fn();
    timer(1000, callback);
    jest.advanceTimersByTime(1000);
    console.log(jest.getTimerCount());

    expect(callback).toHaveBeenCalled();
  });
  test("experimental fake timer mock test1", () => {
    jest.useFakeTimers();
    const callback = jest.fn();
    timer(1000, callback);
    jest.advanceTimersByTime(100);
    jest.advanceTimersByTime(100);
    console.log(jest.getTimerCount());

    expect(callback).toHaveBeenCalled();
  });
  test("experimental fake timer mock test2", () => {
    jest.useFakeTimers();
    const callback = jest.fn();
    timer(1000, callback);
    jest.advanceTimersByTime(100);
    jest.advanceTimersByTime(100);
    // jest.runAllTimers();
    console.log(jest.getTimerCount());

    expect(callback).toHaveBeenCalled();
  });
  test("experimental fake timer mock test3", () => {
    jest.useFakeTimers();
    const callback = jest.fn();
    timer(1000, callback);
    console.log(`before pending timer counts: ${jest.getTimerCount()}`);
    jest.clearAllTimers();
    console.log(`after pending timer counts: ${jest.getTimerCount()}`);

    expect(callback).toHaveBeenCalled();
  });
});
