import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function MainRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: "/" }
            }}
          />
        )
      }
    />
  );
}
