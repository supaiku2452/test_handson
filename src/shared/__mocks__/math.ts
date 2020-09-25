const add = jest.fn().mockImplementation((a, b) => a + b);
const subtract = jest.fn();

export { add, subtract };
