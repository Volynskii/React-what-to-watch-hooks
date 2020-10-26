import * as types from "./types.js";

export const loginAsync = (credentials) => {
  return {
    type: types.LOGIN_ASYNC,
    payload: credentials
  };
};

export const checkLoginAsync = () => {
  return {
    type: types.CHECK_LOGIN_ASYNC
  };
};

export const fillUser = (credentials) => {
  return {
    type: types.FILL_USER,
    payload: credentials
  };
};

export const authenticate = () => {
  return {
    type: types.AUTHENTICATE
  };
};

export const logout = () => {
  return {
    type: types.LOGOUT
  };
};
