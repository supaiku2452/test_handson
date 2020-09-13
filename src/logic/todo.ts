import { getTodos } from "../api/todos";

const myTodos = async () => {
  const todos = await getTodos();
  return todos.filter((todo) => todo.userId === 1);
};

export { myTodos };
