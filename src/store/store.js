import { createStore } from "redux";

import { rootReducer } from "./reducer";
import { rootSaga } from "./root-saga";

import { enhancedStore, sagaMiddleware } from "./middleware";

export const store = createStore(rootReducer, enhancedStore);

sagaMiddleware.run(rootSaga);
