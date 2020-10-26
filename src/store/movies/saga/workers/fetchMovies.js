import { put, apply } from "redux-saga/effects";
import { api } from "../../../../api";
import { fillMovies } from "../../actions";

export function* fetchMoviesWorker() {
  try {
    const response = yield apply(api, api.movies.fetch);
    // eslint-disable-next-line no-console
    console.log(response);

    if (response.status !== 200) {
      throw new Error(`on fetch news`);
    }

    yield put(fillMovies(response.data));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message, `→ fetch movies worker`);
  }
}
