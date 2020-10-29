import { put, apply } from "redux-saga/effects";
import { api } from "../../../../api";
import { removeMovieFromList } from "../../actions";

export function* removeMovieFromListWorker({ payload }) {
  try {
    const response = yield apply(api, api.favorite.remove, [payload]);

    if (response.status !== 200) {
      throw new Error(`on remove favorite movie`);
    }
    yield put(removeMovieFromList(payload));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`remove favorite worker: ${error.message}`);
  }
}
