import { put, apply } from "redux-saga/effects";
import { api } from "../../../../api";
import { fillFavorites } from "../../actions";

export function* fetchFavoritesWorker() {
  try {
    const response = yield apply(api, api.favorite.fetch);

    if (response.status !== 200) {
      throw new Error(`on fetch news`);
    }

    yield put(fillFavorites(response.data));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message, `→ fetch favorites worker`);
  }
}
