import { Filter, TODO_FILTERS } from "./Filter";

interface Props {
  activeCount: number;
  completedCount: number;
  handleFilterChange: (
    filter: (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS]
  ) => void;
  onClearCompleted: () => void;
  filterSelected: (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS];
}

export const Footer: React.FC<Props> = ({
  onClearCompleted,
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  handleFilterChange,
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount} Tareas pendientes</strong>
      </span>

      <Filter
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
      {completedCount > 0 && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Borrar Completados
        </button>
      )}
    </footer>
  );
};
