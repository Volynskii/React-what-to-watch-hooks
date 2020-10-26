import { put, apply } from "redux-saga/effects";
import { api } from "../../../../api";
import { fillComments } from "../../actions";

export function* fetchCommentsWorker({ payload: filmId }) {
  try {
    const response = yield apply(api, api.comments.fetch, [filmId]);

    if (response.status !== 200) {
      throw new Error(`on fetch comments`);
    }

    yield put(fillComments(response.data));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message, `→ fetch comments worker`);
  }
}
