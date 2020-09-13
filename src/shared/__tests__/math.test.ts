import * as math from "../math";

describe("test", () => {
  test("sum", () => {
    expect(math.sum(1, 2)).toEqual(3);
  });
  test("spyOn sum", () => {
    jest.spyOn(math, "sum");
    expect(math.sum(1, 2)).toEqual(3);
  });
  test("spyOn2 sum", () => {
    const spied = jest.spyOn(math, "sum").mockReturnValue(1);
    expect(math.sum(1, 2)).toEqual(1);
    // restoreを忘れると次のテストで失敗する
    spied.mockRestore();
  });
  test("math.sum still mock function", () => {
    expect(math.sum(1, 2)).toEqual(3);
  });
});
