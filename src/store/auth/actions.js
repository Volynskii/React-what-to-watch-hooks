import * as types from "./types.js";

export const loginAsync = (credentials) => {
  return {
    type: types.LOGIN_ASYNC,
    payload: credentials
  };
};

export const fillUser = (credentials) => {
  return {
    type: types.FILL_USER,
    payload: credentials
  };
};
