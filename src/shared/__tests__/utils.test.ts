import { forEach } from "../utils";

describe("utils tests.", () => {
  it("forEach mock test", () => {
    const items = [1, 2, 3];
    const callback = jest.fn();
    forEach(items, callback);
    console.log(callback.mock);
    expect(callback).toHaveBeenCalledTimes(items.length);
  });
});
