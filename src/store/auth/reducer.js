import * as types from "./types";

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null
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

    case types.EMIT_AUTH_ERROR: {
      return {
        ...state,
        error: payload
      };
    }

    default:
      return state;
  }
};
