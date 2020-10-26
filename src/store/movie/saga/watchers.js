import { takeEvery, all, call } from "redux-saga/effects";
import * as types from "../types";

// Workers
import { fetchMovieWorker } from "./workers/fetchMovie";
import { fetchCommentsWorker } from "./workers/fetchComments";

function* watchFetchMovie() {
  yield takeEvery(types.FETCH_MOVIE_ASYNC, fetchMovieWorker);
}

function* watchFetchComments() {
  yield takeEvery(types.FETCH_COMMENTS_ASYNC, fetchCommentsWorker);
}

export function* watchMovie() {
  yield all([call(watchFetchMovie), call(watchFetchComments)]);
}
