import React from "react";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import { Button, Grid, Box, MenuItem, Typography } from "@material-ui/core";
import styles from "./styles";
import { Field, reduxForm } from "redux-form";
import renderTextField from "../../components/TextField";
import renderSelectField from "../../components/Select";
import validate from "./validate";
import * as taskActions from "../../actions/taskAction";

const TaskForm = ({
  hideModal,
  classes,
  handleSubmit,
  invalid,
  submiting,
  taskActionsCreators,
  taskEdit,
  task,
}) => {
  const handleSubmitForm = data => {
    const { title, description, status } = data;
    if (taskEdit && taskEdit.id) {
      taskActionsCreators.editTask(title, description, status);
    } else if (task && task.id) {
      taskActionsCreators.deleteTask(task.id);
    } else {
      taskActionsCreators.addTask(title, description);
    }
  };
  const showGridStatus = () => {
    let xhtml = null;
    if (taskEdit && taskEdit.id) {
      xhtml = (
        <Grid item xs={12}>
          <Field
            id="status"
            classes={classes.selected}
            name="status"
            component={renderSelectField}
            label="Trạng thái"
          >
            <MenuItem value={0}>READY</MenuItem>
            <MenuItem value={1}>IN PROGRESS</MenuItem>
            <MenuItem value={2}>COMPELETD</MenuItem>
          </Field>
        </Grid>
      );
    }
    return xhtml;
  };

  const showModalDelete = () => {
    let xhtml = null;
    if (task) {
      xhtml = (
        <Grid item xs={12}>
          <Typography variant="h6" component="h6" gutterBottom>
            Bạn có chắc chắn muốn xóa {task.title}
          </Typography>
        </Grid>
      );
    } else {
      xhtml = (
        <>
          <Grid item xs={12}>
            <Field
              className={classes.TextField}
              name="title"
              component={renderTextField}
              label="Tieu De"
              value={taskEdit ? taskEdit.title : ""}
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              className={classes.TextField}
              name="description"
              component={renderTextField}
              label="Mo ta"
              value={taskEdit ? taskEdit.description : ""}
            />
          </Grid>
        </>
      );
    }
    return xhtml;
  };
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <Grid container spacing={6}>
        {showModalDelete()}
        {showGridStatus()}
        <Grid item xs={12}>
          <Box display="flex" justifyContent="flex-end" m={1} p={1}>
            <Button
              disabled={(invalid, submiting)}
              variant="contained"
              color="primary"
              type="submit"
            >
              Save
            </Button>
            <Box ml={1}>
              <Button variant="contained" onClick={hideModal}>
                Cancel
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    taskEdit: state.taskReducer.taskEditing,
    initialValues: {
      title: state.taskReducer.taskEditing
        ? state.taskReducer.taskEditing.title
        : null,
      description: state.taskReducer.taskEditing
        ? state.taskReducer.taskEditing.description
        : null,
      status: state.taskReducer.taskEditing
        ? state.taskReducer.taskEditing.status
        : null,
    },
  };
};

const mapDispatchToProps = dispatch => {
  return {
    taskActionsCreators: bindActionCreators(taskActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReduxForm = reduxForm({
  form: "form-name",
  validate,
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
)(TaskForm);
