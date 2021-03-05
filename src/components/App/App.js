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

class App extends Component {
  componentDidMount() {
    console.log("component mounted");
  }

  render() {
    return (
      <Router>
        <div>
          {/* Nav always visible */}
          <Nav />
          {/* components inside switch render via path */}
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home" component={Dash} />
            <Route exact path="/list" component={List} />
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
