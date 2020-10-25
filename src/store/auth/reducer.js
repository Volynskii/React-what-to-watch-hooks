import * as types from "./types";

const initialState = {
  user: {}
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FILL_USER:
      return {
        ...state,
        user: payload
      };

    default:
      return state;
  }
};
