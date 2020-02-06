import React from "react";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import { Button, Grid } from "@material-ui/core";
import { STATUSES } from "../../constants/index";
import styles from "./styles";
import TaskList from "../../components/TaskList";
import AddIcon from "@material-ui/icons/Add";
import * as actionTasks from "../../actions/taskAction";
import * as actionModals from "../../actions/modalAction";
import SearchBox from "../../components/SearchBox";
import TaskForm from "../../containers/TaskForm";

const Taskboard = ({ listTask, taskActionCreators, modalActionCreators }) => {
  const openForm = () => {
    const {
      showModal,
      hideModal,
      changeModalContent,
      changeModalTitle,
    } = modalActionCreators;
    const { setTaskEdit } = taskActionCreators;
    setTaskEdit(null);
    showModal();
    changeModalTitle("Thêm Mới Công Việc");
    changeModalContent(<TaskForm hideModal={hideModal} />);
  };

  const handleEditTask = task => {
    const {
      showModal,
      hideModal,
      changeModalContent,
      changeModalTitle,
    } = modalActionCreators;
    const { setTaskEdit } = taskActionCreators;
    setTaskEdit(task);
    showModal();
    changeModalTitle("Thay Doi Cong Viec");
    changeModalContent(<TaskForm hideModal={hideModal} />);
  };

  const handleDelete = task => {
    const {
      showModal,
      hideModal,
      changeModalContent,
      changeModalTitle,
    } = modalActionCreators;
    const { setTaskEdit } = taskActionCreators;
    setTaskEdit(null);
    showModal();
    changeModalTitle("Xoa Cong Viec");
    changeModalContent(<TaskForm hideModal={hideModal} task={task} />);
  };
  const loadData = () => {
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  };
  const handleFilter = e => {
    const { value } = e.target;
    const { filterTask } = taskActionCreators;
    filterTask(value);
  };
  const renderSearchBox = () => {
    let xhtml = null;
    xhtml = <SearchBox handleChange={handleFilter} />;
    return xhtml;
  };
  const renderBoard = () => {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={3}>
        {STATUSES.map((status, index) => {
          const taskFiltered = listTask.filter(
            task => task.status === status.value,
          );
          return (
            <TaskList
              key={index}
              status={status}
              taskFiltered={taskFiltered}
              onClickEdit={handleEditTask}
              onClickDelete={handleDelete}
            />
          );
        })}
      </Grid>
    );
    return xhtml;
  };

  return (
    <div className="classes.taskBoard">
      <Button
        variant="contained"
        color="primary"
        className="classes.button"
        onClick={loadData}
      >
        Load Data
      </Button>
      <Button
        variant="contained"
        color="primary"
        className="classes.button"
        onClick={openForm}
      >
        <AddIcon className="fa fa-plus-circle" /> Thêm Mới Công Việc
      </Button>
      {renderSearchBox()}
      {renderBoard()}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    listTask: state.taskReducer.listTask,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    taskActionCreators: bindActionCreators(actionTasks, dispatch),
    modalActionCreators: bindActionCreators(actionModals, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(Taskboard);
