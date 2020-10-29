import * as types from "./types.js";
import { transformMovies } from "../../api/transform/transform-movies";

export const fetchMoviesAsync = () => {
  return {
    type: types.FETCH_MOVIES_ASYNC
  };
};

export const fetchFavoritesAsync = () => {
  return {
    type: types.FETCH_FAVORITES_ASYNC
  };
};

export const addMovieToListAsync = (movieId) => {
  return {
    type: types.ADD_MOVIE_TO_LIST_ASYNC,
    payload: movieId
  };
};

export const removeMovieFromListAsync = (movieId) => {
  return {
    type: types.REMOVE_MOVIE_FROM_LIST_ASYNC,
    payload: movieId
  };
};

export const fillMovies = (movies) => {
  return {
    type: types.FILL_MOVIES,
    payload: transformMovies(movies)
  };
};

export const fillFavorites = (movies) => {
  return {
    type: types.FILL_FAVORITES,
    payload: transformMovies(movies)
  };
};

export const addMovieToList = (movie) => {
  return {
    type: types.ADD_MOVIE_TO_LIST,
    payload: movie
  };
};

export const removeMovieFromList = (movieId) => {
  return {
    type: types.REMOVE_MOVIE_FROM_LIST,
    payload: movieId
  };
};
