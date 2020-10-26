import { takeEvery, all, call } from "redux-saga/effects";
import * as types from "../types";

// Workers
import { loginWorker } from "./workers/login";
import { checkLoginWorker } from "./workers/check-login";

function* watchLogin() {
  yield takeEvery(types.LOGIN_ASYNC, loginWorker);
}

function* watchCheckLogin() {
  yield takeEvery(types.CHECK_LOGIN_ASYNC, checkLoginWorker);
}

export function* watchAuth() {
  yield all([call(watchLogin), call(watchCheckLogin)]);
}
