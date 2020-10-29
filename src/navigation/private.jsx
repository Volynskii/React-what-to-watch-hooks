import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import MainPage from "../pages/main-page/main-page";
import DetailsPage from "../pages/details-page/details-page";
import ReviewPage from "../pages/review-page/review-page";
import FavoritesPage from "../pages/favorites-page/favorites-page";

export const Private = () => {
  return (
    <Switch>
      <Route path="/" component={MainPage} exact />
      <Route path="/movies/:id" component={DetailsPage} exact />
      <Route path="/movies/:id/review" component={ReviewPage} />
      <Route path="/favorites" component={FavoritesPage} />
      <Redirect to="/" />
    </Switch>
  );
};
