import React, { Component } from "react";
import {
  BrowserRouter as Router,
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";

import LoginRegister from "./Components/LoginRegisterStage";
import Home from "./Components/Home";
import Table from "./Components/Table"
import Form from "./Components/Form"
import HomeL from "./Components/HomeLayout"
import AddPlace from "./Components/AddPlace"
export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path={"/"} exact component={LoginRegister} />
            <Route path={"/Home"} exact component={Home} />
            <Route path={"/Table"} exact component={Table} />
            <Route path={"/Form"} exact component={Form} />
            <Route path={"/HomeL"} exact component={HomeL} />
            <Route path={"/AddPlace"} exact component={AddPlace} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
