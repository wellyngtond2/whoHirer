import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/index";
import Signup from "./pages/Signup/index";
import Main from "./pages/Main/index";

export default function Routes() {
  return (
    <BrowserRouter history>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
