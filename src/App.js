import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "bulma/css/bulma.css";
import "./App.css";
import TopHeader from "./components/TopHeader/TopHeader";
import Home from "./components/Home/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <TopHeader />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
