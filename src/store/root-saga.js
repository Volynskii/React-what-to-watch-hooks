import { all, call } from "redux-saga/effects";
import { watchMovies } from "./movies/saga/watchers";

export function* rootSaga() {

  yield all([call(watchMovies)]);
}
