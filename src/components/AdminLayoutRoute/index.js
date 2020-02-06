import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { Route } from "react-router-dom";
import Dashboard from "../Dashboard";

function AdminLayoutRoute({ name, path, exact, route }) {
  const { component: YourComponent } = route;
  return (
    <Route
      path={path}
      exact={exact}
      render={routeProps => {
        return (
          <Dashboard name={name}>
            <YourComponent {...routeProps} />
          </Dashboard>
        );
      }}
    />
  );
}

export default withStyles(styles)(AdminLayoutRoute);
