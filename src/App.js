import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PATHS } from "./constants";
import Home from './pages/home';
import './App.css';

class App extends Component<Props> {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={PATHS.HOME} component={Home} />
        </Switch>
      </Router>
    );
  }
}
export default App;
