import { useState } from "react";
import { TodoTitle } from "../types";

interface Props {
  saveTodo: ({ title }: TodoTitle) => void;
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    saveTodo({ title: input });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Que necesitas hacer?"
        autoFocus
      />
    </form>
  );
};
