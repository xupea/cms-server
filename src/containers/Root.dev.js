import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import DevTools from "./DevTools";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MainContainer from "./MainContainer";
import LoginContainer from "./LoginContainer";
import MainRoute from "../routes/MainRoute";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/login" component={LoginContainer} />
        <MainRoute exact path="/" component={MainContainer} />
        {/* <DevTools /> */}
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
