import { takeEvery, all, call } from "redux-saga/effects";
import * as types from "../types";

// Workers
import { fetchMoviesWorker } from "./workers/fetchMovies";

function* watchFetchMovies() {
  yield takeEvery(types.FETCH_MOVIES_ASYNC, fetchMoviesWorker);
}

export function* watchMovies() {
  yield all([call(watchFetchMovies)]);
}
