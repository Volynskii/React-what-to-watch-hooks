import { all, call } from "redux-saga/effects";
import { watchAuth } from "./auth/saga/watchers";
import { watchMovies } from "./movies/saga/watchers";

export function* rootSaga() {

  yield all([call(watchAuth), call(watchMovies)]);
}
