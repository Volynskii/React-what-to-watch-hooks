import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import MainPage from "../pages/main-page/main-page";
import DetailsPage from "../pages/details-page/details-page";
import SignInPage from "../pages/sign-in-page/sign-in-page";

export const Public = () => {
  return (
    <Switch>
      <Route path="/" component={MainPage} exact />
      <Route path="/auth" component={SignInPage} />
      <Route path="/movies/:id" component={DetailsPage} exact />
      <Redirect to="/auth" />
    </Switch>
  );
};
