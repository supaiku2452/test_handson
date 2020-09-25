import { doAdd } from "../app";
import * as math from "../math";

jest.mock("../math");

describe("math2 test", () => {
  test("hoge", () => {
    const actual = doAdd(1, 2);
    expect(actual).toEqual(3);
    expect(math.add).toHaveBeenCalledTimes(1);
    expect(math.add).toHaveBeenCalledWith(1, 2);
  });
});
