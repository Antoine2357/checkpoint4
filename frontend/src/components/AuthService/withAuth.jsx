import React, { Component } from "react";
import AuthService from "./AuthService";

export default function withAuth(AuthComponent) {
  const Auth = new AuthService("http://localhost:8080");
  return class AuthWrapped extends Component {
    constructor() {
      super();
      this.state = {};
    }
    componentDidMount() {
      if (!Auth.loggedIn()) {
        this.props.history.replace("/");
      }
    }
    render() {
      if (Auth.loggedIn()) {
        return <AuthComponent history={this.props.history} />;
      } else {
        return null;
      }
    }
  };
}
