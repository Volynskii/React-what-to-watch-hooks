import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import MainPage from "../pages/main-page/main-page";
import DetailsPage from "../pages/details-page/details-page";
import ReviewPage from "../pages/review-page/review-page";

export const Private = () => {
  return (
    <Switch>
      <Route path="/" component={MainPage} exact />
      <Route path="/movies/:id" component={DetailsPage} exact />
      <Route path="/movies/:id/review" component={ReviewPage} />
      <Redirect to="/" />
    </Switch>
  );
};
