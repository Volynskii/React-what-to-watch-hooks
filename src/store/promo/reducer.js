import * as types from "./types";

const initialState = {};

export const promoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FILL_PROMO:
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
};
