import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { Public } from "./navigation/public";
import { Private } from "./navigation/private";
import { checkLoginAsync, logout } from "./store/auth/actions";
import Loading from "@components/loading/loading";

const App = () => {
  const { isAuthenticated, isInitialized } = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (Cookies.get(`authTokenLocal`)) {
      dispatch(checkLoginAsync());
    } else {
      dispatch(logout());
    }
  }, []);

  if (!isInitialized) {
    return <Loading />;
  }
  
  return isAuthenticated ? <Private /> : <Public />;
};


export default App;
