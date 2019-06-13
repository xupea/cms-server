import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import WrappedNormalLoginForm from "../components/LoginForm";

class Login extends Component {
  render() {
    return <WrappedNormalLoginForm />;
  }
}

export default withRouter(Login);
