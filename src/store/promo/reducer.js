import * as types from "./types";
import * as typesMovies from "../movies/types";

const initialState = {};

export const promoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FILL_PROMO:
      return {
        ...state,
        ...payload
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

    default:
      return state;
  }
};
