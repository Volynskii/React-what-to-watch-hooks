import { put, apply } from "redux-saga/effects";
import Cookies from "js-cookie";
import { api } from "../../../../api";
import {
  fillUser,
  authenticate,
  logout,
  initialize,
  emitAuthError
} from "../../actions";

export function* checkLoginWorker() {
  try {
    const response = yield apply(api, api.auth.check);

    if (response.status !== 200) {
      throw new Error(`on check login`);
    }

    yield put(fillUser(response.data));
    yield put(authenticate());
  } catch (error) {
    yield put(logout());
    Cookies.remove(`authTokenLocal`);
    const loginError = (error.response && error.response.data) || {};
    yield put(emitAuthError(loginError.error || error.message));
  } finally {
    yield put(initialize());
  }
}
