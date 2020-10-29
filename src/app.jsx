import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { Public } from "./navigation/public";
import { Private } from "./navigation/private";
import { checkLoginAsync, logout, emitAuthError } from "./store/auth/actions";
import Loading from "@components/loading/loading";
import Popup from "./components/popup/popup";

const App = () => {
  const { isAuthenticated, isInitialized, authError } = useSelector(
      (state) => state.auth
  );
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (Cookies.get(`authTokenLocal`)) {
      dispatch(checkLoginAsync());
    } else {
      dispatch(logout());
    }
  }, []);

  const onConfirmPopup = () => {
    dispatch(emitAuthError(null));
  };

  if (!isInitialized) {
    return <Loading />;
  }

  return (
    <>
      {authError && (
        <Popup title="Auth error" onConfirm={onConfirmPopup}>
          {authError}
        </Popup>
      )}
      {isAuthenticated ? <Private /> : <Public />}
    </>
  );
};


export default App;
