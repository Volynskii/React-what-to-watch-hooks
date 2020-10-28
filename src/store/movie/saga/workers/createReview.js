import { put, apply } from "redux-saga/effects";
import { api } from "../../../../api";
import { fillComments, emitMovieError } from "../../actions";

export function* createReviewWorker({ payload }) {
  const { filmId, review } = payload;
  try {
    const response = yield apply(api, api.comments.create, [filmId, review]);

    if (response.status !== 200) {
      throw new Error(`on create comments`);
    }

    yield put(fillComments(response.data));
  } catch (error) {
    // eslint-disable-next-line no-console
    yield put(emitMovieError(`Create comment worker: ${error.message}`));
  }
}
