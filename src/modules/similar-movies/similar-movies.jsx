import React from "react";
import { array } from "prop-types";

import MoviesList from "../../components/movies-list/movies-list";

const SimilarMovies = ({ movies }) => {
  if (!movies.length) {
    return null;
  }

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <MoviesList movies={movies} />
    </section>
  );
};

SimilarMovies.propTypes = {
  movies: array
};

export default SimilarMovies;
