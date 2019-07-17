import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Admin from "./components/Admin";
import Core from "./components/core";
import { Switch, Route, withRouter } from "react-router-dom";
import AdminSpace from "./components/AdminSpace";
function App({ location }) {
  return (
    <div className="App">
      <section className="route-section">
        <Switch location={location} key={location}>
          <Route exact path="/" component={Core} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/admin-space" component={AdminSpace} />
        </Switch>
      </section>
    </div>
  );
}

export default withRouter(App);
