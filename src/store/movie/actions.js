import * as types from "./types.js";
import { transformMovie } from "../../api/transform/transformMovie";
import { transformComments } from "../../api/transform/transform-comments";

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

export const createReviewAsync = (filmId, review) => {
  return {
    type: types.CREATE_REVIEW_ASYNC,
    payload: { filmId, review }
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
    payload:  transformComments(comments)
  };
};

export const emitMovieError = (error) => {
  return {
    type: types.EMIT_MOVIE_ERROR,
    payload: error
  };
};
