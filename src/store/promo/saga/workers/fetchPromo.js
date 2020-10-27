import { put, apply } from "redux-saga/effects";
import { api } from "../../../../api";
import { fillPromo } from "../../actions";

export function* fetchPromoWorker() {
  try {
    const response = yield apply(api, api.promo.fetch);

    if (response.status !== 200) {
      throw new Error(`on fetch news`);
    }

    yield put(fillPromo(response.data));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message, `→ fetch promo worker`);
  }
}
