import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/index";
import Signup from "./pages/Signup/index";
import Main from "./pages/Main/index";
import EmployerDetails from "./pages/EmployerDetails/index";

export default function Routes() {
  return (
    <BrowserRouter history>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Login" component={Login} />
        <Route path="/EmployerDetails" component={EmployerDetails} />
      </Switch>
    </BrowserRouter>
  );
}
