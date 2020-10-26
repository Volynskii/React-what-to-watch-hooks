import { combineReducers } from "redux";

import { authReducer as auth } from "./auth/reducer";
import { moviesReducer as movies } from "./movies/reducer";

export const rootReducer = combineReducers({
  auth,
  movies
});
