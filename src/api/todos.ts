export type Todo = {
  userId: number;
  id: number;
  title: string;
  complated: boolean;
};

const url = "https://jsonplaceholder.typicode.com/todos";

const getTodos = () =>
  fetch(url).then((res: Response) => res.json().then((json) => json as Todo[]));

const getTodoById = (id: number) =>
  fetch([url, id].join("/")).then((res: Response) =>
    res.json().then((json) => json as Todo)
  );

export { getTodos, getTodoById };
