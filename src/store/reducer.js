import { combineReducers } from "redux";

import { authReducer as auth } from "./auth/reducer";
import { moviesReducer as movies } from "./movies/reducer";
import { movieReducer as movie } from "./movie/reducer";
 import { promoReducer as promo } from "./promo/reducer";

export const rootReducer = combineReducers({
  auth,
  movies,
  movie,
  promo
});
