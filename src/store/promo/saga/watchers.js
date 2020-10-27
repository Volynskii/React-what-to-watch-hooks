import { takeEvery, all, call } from "redux-saga/effects";
import * as types from "../types";

// Workers
import { fetchPromoWorker } from "./workers/fetchPromo";

function* watchFetchPromo() {
  yield takeEvery(types.FETCH_PROMO_ASYNC, fetchPromoWorker);
}

export function* watchPromo() {
  yield all([call(watchFetchPromo)]);
}
