import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import { Router, browserHistory } from "react-router";
import routes from "./routes";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

import reportWebVitals from "./reportWebVitals";
const store = configureStore();

axios.defaults.baseURL =
  "https://iservice.api.developteam.net/iservice-api/v1/";
axios.defaults.withCredentials = true;


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
