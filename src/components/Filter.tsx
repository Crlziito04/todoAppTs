export const TODO_FILTERS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
  PARTIAL: "partial",
} as const;

const FILTERS_BTNS = {
  [TODO_FILTERS.ALL]: {
    literal: "Todos",
    href: `/filters=${TODO_FILTERS.ALL}`,
  },
  [TODO_FILTERS.ACTIVE]: {
    literal: "Activos",
    href: `/filters=${TODO_FILTERS.ACTIVE}`,
  },
  [TODO_FILTERS.COMPLETED]: {
    literal: "Completados",
    href: `/filters=${TODO_FILTERS.COMPLETED}`,
  },
} as const;

interface Props {
  onFilterChange: (
    filter: (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS]
  ) => void;
  filterSelected: (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS];
}

export const Filter: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  const handleClick =
    (filter: (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS]) =>
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      onFilterChange(filter);
    };

  return (
    <ul className="filters">
      {Object.entries(FILTERS_BTNS).map(([key, { href, literal }]) => {
        const isSelected = key === filterSelected;
        const className = isSelected ? "selected" : "";

        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={handleClick(
                key as (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS]
              )}
            >
              {literal}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
