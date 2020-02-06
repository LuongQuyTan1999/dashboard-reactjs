import React from "react";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import * as uiActions from "../../actions/uiAction";
import styles from "./styles";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Dashboard({ children, name, classes, uiActionCreators, showSidebar }) {
  const onToggleSidebar = value => {
    if (value === true) {
      uiActionCreators.showSidebar();
    } else {
      uiActionCreators.hideSidebar();
    }
  };
  return (
    <div>
      <Header
        name={name}
        showSidebar={showSidebar}
        onToggleSidebar={onToggleSidebar}
      />
      <div className={classes.wrapper}>
        <Sidebar showSidebar={showSidebar} onToggleSidebar={onToggleSidebar} />
        <div className={showSidebar === true ? classes.wrapperContent : classes.wrapperContent1}>{children}</div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    showSidebar: state.uiReducer.showSidebar,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    uiActionCreators: bindActionCreators(uiActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(Dashboard);
