import * as types from "./types.js";
import { transformMovie } from "../../api/transform/transformMovie";

export const fetchMovieAsync = (id) => {
  return {
    type: types.FETCH_MOVIE_ASYNC,
    payload: id
  };
};

export const fetchCommentsAsync = (filmId) => {
  return {
    type: types.FETCH_COMMENTS_ASYNC,
    payload: filmId
  };
};

export const fillMovie = (data) => {
  return {
    type: types.FILL_MOVIE,
    payload: transformMovie(data)
  };
};

export const resetMovie = () => {
  return {
    type: types.RESET_MOVIE
  };
};

export const fillComments = (comments) => {
  return {
    type: types.FILL_COMMENTS,
    payload: comments
  };
};
