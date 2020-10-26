import { put, apply } from "redux-saga/effects";
import { api } from "../../../../api";
import { fillMovie } from "../../actions";

export function* fetchMovieWorker({ payload: id }) {
  try {
    const response = yield apply(api, api.movies.fetch);

    if (response.status !== 200) {
      throw new Error(`on fetch news`);
    }

    const movie = response.data.find((item) => item.id === Number(id));

    yield put(fillMovie(movie));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message, `→ fetch movie worker`);
  }
}
