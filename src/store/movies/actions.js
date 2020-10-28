import * as types from "./types.js";
import { transformMovies } from "../../api/transform/transform-movies";

export const fetchMoviesAsync = () => {
  return {
    type: types.FETCH_MOVIES_ASYNC
  };
};

export const fillMovies = (movies) => {
  return {
    type: types.FILL_MOVIES,
    payload: transformMovies(movies)
  };
};
