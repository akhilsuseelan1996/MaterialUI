import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { Component } from "react";

import Home from "./Home";
import Reg from "./Register";
import login from "./Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Reg} />
            <Route exact path="/login" component={login} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
