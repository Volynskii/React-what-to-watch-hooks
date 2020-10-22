import React from "react";
import { array, func } from "prop-types";
import cx from "classnames";
import { GenresMap } from "../../api/transform/transformMovies";

export const filters = [
  { id: GenresMap.All, name: `All genres` },
  { id: GenresMap.Comedy, name: `Comedies` },
  { id: GenresMap.Crime, name: `Crime` },
  { id: GenresMap.Documentary, name: `Documentary` },
  { id: GenresMap.Drama, name: `Dramas` },
  { id: GenresMap.Horror, name: `Horror` },
  { id: GenresMap[`Kids & Family`], name: `Kids & Family` },
  { id: GenresMap.Romance, name: `Romance` },
  { id: GenresMap[`Sci-Fi`], name: `Sci-Fi` },
  { id: GenresMap.Thriller, name: `Thrillers` }
];

const MoviesFilter = ({ activeFilter, setActiveFilter }) => {
  const handleFilter = (evt, id) => {
    evt.preventDefault();
    setActiveFilter(id);
  };

  return (
    <ul className="catalog__genres-list">
      {filters.map((item) => (
        <li
          key={item.id}
          className={cx(`catalog__genres-item`, {
            [`catalog__genres-item--active`]: item.id === activeFilter
          })}
        >
          <a
            href="#"
            className="catalog__genres-link"
            onClick={(evt) => handleFilter(evt, item.id)}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
MoviesFilter.propTypes = {
  activeFilter: array.isRequired,
  setActiveFilter: func.isRequired
};


export default MoviesFilter;
