export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export type TodoTitle = Pick<Todo, "title">;
export type TodoId = Pick<Todo, "id">;
export type TodoCompleted = Pick<Todo, "completed">;

export type ListOfTodos = Todo[];

export interface Props {
  todos: ListOfTodos;
  onRemoveTodo: (id: TodoId) => void;

  todoCompleted: ({ id, completed }: Pick<Todo, "id" | "completed">) => void;
}
