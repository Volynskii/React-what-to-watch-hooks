import { put, apply } from "redux-saga/effects";
import { api } from "../../../../api";
import { addMovieToList } from "../../actions";
import { transformMovie } from "../../../../api/transform/transform-movie";

export function* addMovieToListWorker({ payload }) {
  try {
    const response = yield apply(api, api.favorite.add, [payload]);

    if (response.status !== 200) {
      throw new Error(`on create comments`);
    }
    const movie = transformMovie(response.data);
    yield put(addMovieToList(movie));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`add favorite worker: ${error.message}`);
  }
}
