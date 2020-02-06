import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { Grid, Box } from "@material-ui/core";
import TaskItem from "../TaskItem";

export class TaskList extends Component {
  render() {
    const {
      status,
      taskFiltered,
      index,
      onClickEdit,
      onClickDelete,
    } = this.props;
    return (
      <Grid item md={4} xs={12} key={index}>
        <Box mt={2} mb={2}>
          <div>{status.label}</div>
        </Box>
        <div>
          {taskFiltered.map((task, index) => {
            return (
              <TaskItem
                key={index}
                task={task}
                status={status}
                onClickEdit={() => onClickEdit(task)}
                onClickDelete={() => onClickDelete(task)}
              />
            );
          })}
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskList);
