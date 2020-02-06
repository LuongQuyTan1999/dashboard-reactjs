import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { Route } from "react-router-dom";

function DefaultLayoutRoute({ name, path, exact, route }) {
  const { component: YourComponent } = route;
  return (
    <Route
      path={path}
      exact={exact}
      render={routeProps => {
        return <YourComponent {...routeProps} />;
      }}
    />
  );
}

export default withStyles(styles)(DefaultLayoutRoute);
