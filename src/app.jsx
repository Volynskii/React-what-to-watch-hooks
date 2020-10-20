import React, {createContext} from "react";
import MainPage from "./pages/main-page/main-page";
import DetailsPage from "./pages/details-page/details-page";

import { data } from "../src/api/mocks";


export const Context = createContext();

export const options = {
  data
};

const getPage = () => {
  switch (location.pathname) {
    case `/details`:
      return <DetailsPage />;
    default:
      return <MainPage />;
  }
};

const App = () => {
  return <Context.Provider value={options}>{getPage()}</Context.Provider>;
};

export default App;
