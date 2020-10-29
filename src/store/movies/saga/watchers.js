import { takeEvery, all, call } from "redux-saga/effects";
import * as types from "../types";

// Workers
import { fetchMoviesWorker } from "./workers/fetchMovies";
import { addMovieToListWorker } from "./workers/addMovieToList";
import { fetchFavoritesWorker } from "./workers/fetchFavorites";

function* watchFetchMovies() {
  yield takeEvery(types.FETCH_MOVIES_ASYNC, fetchMoviesWorker);
}

function* watchFetchFavorites() {
  yield takeEvery(types.FETCH_FAVORITES_ASYNC, fetchFavoritesWorker);
}

function* watchAddMovieToList() {
  yield takeEvery(types.ADD_MOVIE_TO_LIST_ASYNC, addMovieToListWorker);
}

export function* watchMovies() {
  yield all([
    call(watchFetchMovies),
    call(watchAddMovieToList),
    call(watchFetchFavorites)
  ]);
}
