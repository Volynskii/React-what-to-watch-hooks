import React from "react";
import { useSelector } from "react-redux";
import { Public } from "./navigation/public";
import { Private } from "./navigation/private";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? <Private /> : <Public />;
};


export default App;
