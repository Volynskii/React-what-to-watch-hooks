import React from "react";
import { number, func } from "prop-types";
import cx from "classnames";
import { GenresMap } from "../../api/transform/transformMovies";

export const filters = [
  [GenresMap.All, `All genres`],
  [GenresMap.Comedy, `Comedies`],
  [GenresMap.Crime, `Crime`],
  [GenresMap.Documentary, `Documentary`],
  [GenresMap.Drama, `Dramas`],
  [GenresMap.Horror, `Horror`],
  [GenresMap.Family, `Kids & Family`],
  [GenresMap.Romance, `Romance`],
  [GenresMap.SciFi, `Sci-Fi`],
  [GenresMap.Thriller, `Thrillers`]
];

const MoviesFilter = ({ activeFilter, setActiveFilter }) => {
  const handleFilter = (evt, id) => {
    evt.preventDefault();
    setActiveFilter(id);
  };

  return (
    <ul className="catalog__genres-list">
      {filters.map(([id, name]) => (
        <li
          key={id}
          className={cx(`catalog__genres-item`, {
            [`catalog__genres-item--active`]: id === activeFilter
          })}
        >
          <a
            href="#"
            className="catalog__genres-link"
            onClick={(evt) => handleFilter(evt, id)}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};
MoviesFilter.propTypes = {
  activeFilter: number.isRequired,
  setActiveFilter: func.isRequired
};


export default MoviesFilter;
