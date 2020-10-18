import React from "react";
import cx from "classnames";

export const filters = [
  { id: 1, name: `All genres` },
  { id: 2, name: `Comedies` },
  { id: 3, name: `Crime` },
  { id: 4, name: `Documentary` },
  { id: 5, name: `Dramas` },
  { id: 6, name: `Horror` },
  { id: 7, name: `Kids & Family` },
  { id: 8, name: `Romance` },
  { id: 9, name: `Sci-Fi` },
  { id: 10, name: `Thrillers` }
];

const MoviesFilter = () => {
  return (
    <ul className="catalog__genres-list">
      {filters.map((item) => (
        <li
          key={item.id}
          className={cx(`catalog__genres-item`, {
            [`catalog__genres-item--active`]: item.id === 1
          })}
        >
          <a href="#" className="catalog__genres-link">
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MoviesFilter;
