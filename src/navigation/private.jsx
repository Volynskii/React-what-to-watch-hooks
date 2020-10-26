import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import MainPage from "../pages/main-page/main-page";
import DetailsPage from "../pages/details-page/details-page";

export const Private = () => {
  return (
    <Switch>
      <Route path="/" component={MainPage} exact />
      <Route path="/movies/:id" component={DetailsPage} />
      <Redirect to="/" />
    </Switch>
  );
};
