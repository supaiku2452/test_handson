import { myTodos } from "../todo";

// mock global
// https://github.com/node-fetch/node-fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          userId: 1,
          id: 1,
        },
        {
          userId: 1,
          id: 2,
        },
        {
          userId: 1,
          id: 3,
        },
        {
          userId: 1,
          id: 4,
        },
        {
          userId: 1,
          id: 5,
        },
        {
          userId: 1,
          id: 6,
        },
        {
          userId: 1,
          id: 7,
        },
        {
          userId: 1,
          id: 8,
        },
        {
          userId: 1,
          id: 9,
        },
        {
          userId: 1,
          id: 10,
        },
        {
          userId: 2,
          id: 11,
        },
        {
          userId: 2,
          id: 12,
        },
        {
          userId: 2,
          id: 13,
        },
        {
          userId: 2,
          id: 14,
        },
        {
          userId: 2,
          id: 15,
        },
        {
          userId: 2,
          id: 16,
        },
        {
          userId: 2,
          id: 17,
        },
        {
          userId: 2,
          id: 18,
        },
        {
          userId: 2,
          id: 19,
        },
        {
          userId: 2,
          id: 20,
        },
        {
          userId: 3,
          id: 21,
        },
        {
          userId: 3,
          id: 22,
        },
        {
          userId: 3,
          id: 23,
        },
        {
          userId: 3,
          id: 24,
        },
      ]),
  })
) as any;

describe("utils tests.", () => {
  it("forEach mock test", async () => {
    const todos = await myTodos();
    expect(todos[0].userId).toEqual(1);
  });
});
