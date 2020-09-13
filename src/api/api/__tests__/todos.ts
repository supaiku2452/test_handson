import { getTodoById } from "../../todos";

// mock global
// https://github.com/node-fetch/node-fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ id: 1 }),
  })
) as any;

describe("tests", () => {
  test("get todos", async () => {
    const todo = await getTodoById(1);
    expect(todo.id).toEqual(1);
  });
});
