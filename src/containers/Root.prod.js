import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";

import MainContainer from "./MainContainer";

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Route exact path="/" component={MainContainer} />
      {/* <Route path="/about" component={PlaylistForm} /> */}
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
