console.log("outside");
beforeAll(() => {
  console.log("beforeAll:[1]");
});
beforeEach(() => {
  console.log("beforeEach:[1]");
});
afterAll(() => {
  console.log("afterAll:[1]");
});
afterEach(() => {
  console.log("afterEach:[1]");
});
describe("life cycle", () => {
  beforeEach(() => {
    console.log("beforeEach:[2]");
  });
  afterEach(() => {
    console.log("afterEach:[2]");
  });
  test("test1", () => {
    console.log("test1");
  });
  test("test2", () => {
    console.log("test2");
  });
});
