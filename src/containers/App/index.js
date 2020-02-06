import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../commons/Theme";
import ModalComponent from "../../components/Modal";
import GlobalLoading from "../../components/GlobalLoading";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ADMIN_ROUTES } from "../../constants/index";
import { USER_ROUTES } from "../../constants/index";
import AdminLayoutRoute from "../../components/AdminLayoutRoute";
import DefaultLayoutRoute from "../../components/DefaultLayoutRoute";
function App() {
  const renderAdminRoute = () => {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map((route, index) => {
      return (
        <AdminLayoutRoute
          key={index}
          path={route.path}
          exact={route.exact}
          name={route.name}
          component={route.component}
          route={route}
        />
      );
    });
    return xhtml;
  };
  const renderDefaultRoute = () => {
    let xhtml = null;
    xhtml = USER_ROUTES.map((route, index) => {
      return (
        <DefaultLayoutRoute
          key={index}
          path={route.path}
          exact={route.exact}
          name={route.name}
          component={route.component}
          route={route}
        />
      );
    });
    return xhtml;
  }
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <GlobalLoading />
          <ModalComponent />
          <Switch>
            {renderAdminRoute()}
            {renderDefaultRoute()}
          </Switch>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
