import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store/store";
import App from "./app.jsx";

const init = () => {
  ReactDOM.render(
      <Provider store={store}>

        <Router>
          <App />
        </Router>

      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
