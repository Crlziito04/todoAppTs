import { useState } from "react";
import Todos from "./components/Todos";
import { type TodoId, Todo as TodoType, TodoTitle } from "./types";
import { Footer } from "./components/Footer";
import { TODO_FILTERS } from "./components/Filter";
import { Header } from "./components/Header";

const mockTodos = [
  {
    id: "1",
    title: "Reparar lavadora",
    completed: false,
  },
  {
    id: "2",
    title: "Estudiar Angular",
    completed: false,
  },
  {
    id: "3",
    title: "todo 3",
    completed: false,
  },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos);

  //*UseState no tipa implicitamente
  const [filterSelected, setFilterSelected] = useState<
    (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS]
  >(TODO_FILTERS.ALL);

  const handleFilterChange = (
    filter: (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS]
  ): void => {
    setFilterSelected(filter);
  };

  const hadleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((tod) => tod.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });

  const onClearCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false,
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  return (
    <>
      <div className="todoapp">
        <Header onAddTodo={handleAddTodo} />
        <Todos
          todos={filteredTodos}
          todoCompleted={handleCompleted}
          onRemoveTodo={hadleRemove}
        />
        <Footer
          onClearCompleted={onClearCompleted}
          activeCount={activeCount}
          completedCount={todos.length - activeCount}
          filterSelected={filterSelected}
          handleFilterChange={handleFilterChange}
        />
      </div>
    </>
  );
};

export default App;
