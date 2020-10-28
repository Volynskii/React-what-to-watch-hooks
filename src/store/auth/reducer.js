import * as types from "./types";

const initialState = {
  user: null,
  isAuthenticated: false
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FILL_USER:
      return {
        ...state,
        user: payload
      };
    case types.AUTHENTICATE:
      return {
        ...state,
        isAuthenticated: true
      };

    case types.LOGOUT:
      return {
        ...initialState
      };

    default:
      return state;
  }
};
