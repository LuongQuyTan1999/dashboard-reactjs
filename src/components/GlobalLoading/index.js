import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import loadingIcon from "../../assets/images/ajax-loader.gif";
import { connect } from "react-redux";
import * as actions from "../../actions/uiAction";

const GlobalLoading = ({ classes, showLoading }) => {
  let xhtml = null;
  if (showLoading) {
    xhtml = (
      <div className={classes.globalLoading}>
        <img src={loadingIcon} alt="loading" className={classes.icon} />
      </div>
    );
  }
  return <>{xhtml}</>;
};

const mapStateToProps = state => {
  return {
    showLoading: state.uiReducer.showLoading,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    uiActions: () => {
      dispatch(actions.showLoading());
    },
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(GlobalLoading),
);
