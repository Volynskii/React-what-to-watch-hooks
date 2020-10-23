import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import SimilarMovies from "./similar-movies";
import { fetchMoviesAsync } from "../../store/movies/actions";

const selectSimilarMovies = createSelector(
    (state) => state.movies.list,
    (movies) => movies.slice(0, 4)
);

export const SimilarMoviesContainer = () => {
  const movies = useSelector(selectSimilarMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesAsync());
  }, []);

  return <SimilarMovies movies={movies} />;
};
