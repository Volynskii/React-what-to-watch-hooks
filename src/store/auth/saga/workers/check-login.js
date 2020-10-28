import { put, apply } from "redux-saga/effects";
import { api } from "../../../../api";
import { fillUser, authenticate, logout } from "../../actions";

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
    // eslint-disable-next-line no-console
    console.log(error.message, `→ check login worker`);
  }
}
