import * as types from "./types";

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
