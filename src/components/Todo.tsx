import React from "react";
import { TodoId, type Todo as TodoType } from "../types";

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void;

  todoCompleted: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void;
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  todoCompleted,
}) => {
  return (
    <div className="view">
      <input
        id={id}
        type="checkbox"
        className="toggle"
        checked={completed}
        onChange={(e) => {
          todoCompleted({ id, completed: e.target.checked });
        }}
      />
      <label htmlFor={id}>{title}</label>

      <button className="destroy" onClick={() => onRemoveTodo({ id })} />
    </div>
  );
};
