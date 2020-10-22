import React, { useEffect } from "react";
import { array, func } from "prop-types";

import MoviesList from "../../components/movies-list/movies-list";

const SimilarMovies = ({ movies, fetchMoviesAsync }) => {
  useEffect(() => {
    fetchMoviesAsync();
  }, []);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <MoviesList movies={movies.slice(0, 4)} />
    </section>
  );
};

SimilarMovies.propTypes = {
  movies: array.isRequired,
  fetchMoviesAsync: func.isRequired
};

export default SimilarMovies;
