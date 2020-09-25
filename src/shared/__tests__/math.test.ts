import * as math from "../math";

describe("test", () => {
  test("add", () => {
    expect(math.add(1, 2)).toEqual(3);
  });
  test("spyOn sum", () => {
    jest.spyOn(math, "add");
    expect(math.add(1, 2)).toEqual(3);
  });
  test("spyOn2 sum", () => {
    const spied = jest.spyOn(math, "add").mockReturnValue(1);
    expect(math.add(1, 2)).toEqual(1);
    // restoreを忘れると次のテストで失敗する
    spied.mockRestore();
  });
  test("math.add still mock function", () => {
    expect(math.add(1, 2)).toEqual(3);
  });
  test("jest-extended sample test", () => {
    expect(true).toBeTrue();
  });
});
