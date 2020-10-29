import * as types from "./types";
import * as typesMovies from "../movies/types";

const initialState = {
  comments: [],
  review: null,
  error: null
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FILL_MOVIE:
      return {
        ...state,
        ...payload
      };

    case types.FILL_COMMENTS:
      return {
        ...state,
        comments: payload
      };

    case types.RESET_MOVIE:
      return {
        ...initialState
      };

    case typesMovies.ADD_MOVIE_TO_LIST:
      return {
        ...state,
        isFavorite: payload.id === state.id
      };

    case typesMovies.REMOVE_MOVIE_FROM_LIST:
      return {
        ...state,
        isFavorite: payload.id === state.id
      };

    case types.EMIT_MOVIE_ERROR: {
      return {
        ...state,
        error: payload
      };
    }

    default:
      return state;
  }
};
