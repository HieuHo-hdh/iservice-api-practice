import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./containers/App";
import HomePage from "./components/Homepage";
import LoginForm from "./components/LoginForm";
export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginForm} />
    {/* <Route path="/Login" component={LoginForm} /> */}
    <Route path="/Homepage" component={HomePage} />
  </Route>
);
