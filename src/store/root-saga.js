import { all, call } from "redux-saga/effects";
import { watchAuth } from "./auth/saga/watchers";
import { watchMovies } from "./movies/saga/watchers";
import { watchMovie } from "./movie/saga/watchers";
import { watchPromo } from "./promo/saga/watchers";

export function* rootSaga() {

  yield all([call(watchAuth),
    call(watchMovies),
    call(watchMovie),
    call(watchPromo)
  ]);
}
