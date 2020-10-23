import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import MoviesList from "../../components/movies-list/movies-list";
import { fetchMoviesAsync } from "../../store/movies/actions";

const SimilarMovies = () => {
  const movies = useSelector((state) => state.movies.list);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchMoviesAsync());
  }, []);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <MoviesList movies={movies.slice(0, 4)} />
    </section>
  );
};

export default SimilarMovies;
