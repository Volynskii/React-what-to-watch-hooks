import * as types from "./types";

const initialState = {
  list: [],
  favorites: []
};

export const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FILL_MOVIES:
      return {
        ...state,
        list: payload
      };

    case types.FILL_FAVORITES:
      return {
        ...state,
        favorites: payload
      };

    case types.ADD_MOVIE_TO_LIST:
      return {
        ...state,
        favorites: [...state.favorites, payload]
      };

    case types.REMOVE_MOVIE_FROM_LIST:
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== payload)
      };

    default:
      return state;
  }
};
