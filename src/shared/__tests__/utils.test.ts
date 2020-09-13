import { forEach } from "../utils";

describe("forEach test", () => {
  it("mock tesst", () => {
    const items = [1, 2, 3];
    const callback = jest.fn();
    forEach(items, callback);
    console.log(callback.mock);
    expect(callback).toHaveBeenCalledTimes(items.length);
  });
});
