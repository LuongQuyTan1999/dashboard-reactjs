import React from "react";
import styles from "./styles";
import { Modal } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CloseIcon from "@material-ui/icons/Clear";
import * as actionModals from "../../actions/modalAction";

const ModalComponent = ({ classes, title, open, component, modalActions }) => {
  const { hideModal } = modalActions;
  return (
    <Modal open={open} onClose={hideModal}>
      <div className={classes.modal}>
        <div className={classes.header}>
          <span className="classes.Title">{title}</span>
          <CloseIcon className="classes.icon" onClick={hideModal} />
        </div>

        <div className="classes.content">{component}</div>
      </div>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    open: state.modalReducer.showModal,
    component: state.modalReducer.component,
    title: state.modalReducer.title,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    modalActions: bindActionCreators(actionModals, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(ModalComponent),
);
