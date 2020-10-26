import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Public } from "./navigation/public";
import { Private } from "./navigation/private";
import { checkLoginAsync } from "./store/auth/actions";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkLoginAsync());
  }, []);

  return isAuthenticated ? <Private /> : <Public />;
};


export default App;
