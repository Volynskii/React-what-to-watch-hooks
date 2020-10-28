import { takeEvery, all, call } from "redux-saga/effects";
import * as types from "../types";

// Workers
import { fetchMovieWorker } from "./workers/fetchMovie";
import { fetchCommentsWorker } from "./workers/fetchComments";
import { createReviewWorker } from "./workers/createReview";

function* watchFetchMovie() {
  yield takeEvery(types.FETCH_MOVIE_ASYNC, fetchMovieWorker);
}

function* watchFetchComments() {
  yield takeEvery(types.FETCH_COMMENTS_ASYNC, fetchCommentsWorker);
}

function* watchCreateReview() {
  yield takeEvery(types.CREATE_REVIEW_ASYNC, createReviewWorker);
}

export function* watchMovie() {
  yield all([call(watchFetchMovie),
    call(watchFetchComments),
    call(watchCreateReview)

  ]);
}
