import React, { useContext } from "react";

import MoviesList from "../../components/movies-list/movies-list";

import { Context } from "../../app";

const SimilarMovies = () => {
  const { data } = useContext(Context);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <MoviesList movies={data.slice(0, 4)} />
    </section>
  );
};

export default SimilarMovies;
