import * as types from "./types";

const initialState = {
  user: null,
  isAuthenticated: false,
  isInitialized: false,
  authError: null
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

    case types.INITIALIZE:
      return {
        ...state,
        isInitialized: true
      };

    case types.LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isInitialized: true
      };

    case types.EMIT_AUTH_ERROR: {
      return {
        ...state,
        authError: payload
      };
    }

    default:
      return state;
  }
};
