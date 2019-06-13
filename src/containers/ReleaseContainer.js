import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ReleaseList from "../components/ReleaseList";

class ReleaseContainer extends Component {
  render() {
    return <ReleaseList />;
  }
}

export default withRouter(ReleaseContainer);
