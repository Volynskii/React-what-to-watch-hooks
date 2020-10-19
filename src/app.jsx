import React from "react";
import MainPage from "./pages/main-page/main-page";
import DetailsPage from "./pages/details-page/details-page";

const getPage = () => {
  switch (location.pathname) {
    case `/details`:
      return <DetailsPage />;
    default:
      return <MainPage />;
  }
};

const App = () => {
  return getPage();
};

export default App;
