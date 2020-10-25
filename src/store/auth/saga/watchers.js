import { takeEvery, all, call } from "redux-saga/effects";
import * as types from "../types";

// Workers
import { loginWorker } from "./workers/login";

function* watchLogin() {
  yield takeEvery(types.LOGIN_ASYNC, loginWorker);
}

export function* watchAuth() {
  yield all([call(watchLogin)]);
}
