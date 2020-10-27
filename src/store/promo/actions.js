import * as types from "./types";
import { transformMovie } from "../../api/transform/transformMovie";

export const fetchPromoAsync = () => {
  return {
    type: types.FETCH_PROMO_ASYNC
  };
};

export const fillPromo = (data) => {
  return {
    type: types.FILL_PROMO,
    payload: transformMovie(data)
  };
};
