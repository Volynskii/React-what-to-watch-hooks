import * as types from "./types";

const initialState = {
  list: []
};

export const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FILL_MOVIES:
      return {
        ...state,
        list: payload
      };

    default:
      return state;
  }
};
