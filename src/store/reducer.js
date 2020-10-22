import { combineReducers } from "redux";

import { moviesReducer as movies } from "./movies/reducer";

export const rootReducer = combineReducers({
  movies
});
