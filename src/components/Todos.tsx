import { Props } from "../types";
import { Todo } from "./Todo.tsx";

//*Tipar props
const Todos: React.FC<Props> = ({ todos, onRemoveTodo, todoCompleted }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? "completed" : ""}  `}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            todoCompleted={todoCompleted}
            onRemoveTodo={onRemoveTodo}
          />
        </li>
      ))}
    </ul>
  );
};

export default Todos;
