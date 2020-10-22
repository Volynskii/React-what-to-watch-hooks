import React, { useState, useEffect } from "react";
import { array, func } from "prop-types";

import ShowMoreButton from "../../components/buttons/show-more-button/show-more-button";
import MoviesFilter from "../../components/movies-filter/movies-filter";
import MoviesList from "../../components/movies-list/movies-list";
import { GenresMap } from "../../api/transform/transformMovies";

const Catalog = ({ movies, fetchMoviesAsync }) => {
  const [list, setList] = useState([]);
  const [activeFilter, setActiveFilter] = useState(GenresMap.All);

  useEffect(() => {
    fetchMoviesAsync();
  }, []);
  useEffect(() => {
    const filtered =
      activeFilter === GenresMap.All
        ? movies
        : movies.filter((item) => item.genreId === activeFilter);
    setList(filtered);
  }, [movies, activeFilter]);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <MoviesFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <MoviesList movies={list} />

      <div className="catalog__more">
        <ShowMoreButton />
      </div>
    </section>
  );
};

Catalog.propTypes = {
  movies: array.isRequired,
  fetchMoviesAsync: func.isRequired
};

export default Catalog;
