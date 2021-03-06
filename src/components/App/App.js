import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Nav from "../Nav/Nav";
import Dash from "../Dash/Dash";
import List from "../List/List";
import Side from "../Side/Side";
import Log from "../Log/Log";
import Packets from "../Packets/Packets";

import "antd/dist/antd.css";

class App extends Component {
  componentDidMount() {
    console.log("component mounted");
  }

  render() {
    return (
      <Router>
        <div className="Main-root">
          {/* Nav & side always visible */}
          <Nav />
          <Side />
          {/* components inside switch render via path */}
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home" component={Dash} />
            <Route exact path="/list" component={List} />
            <Route exact path="/Log" component={Log} />
            <Route exact path="/packets" component={Packets} />
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
