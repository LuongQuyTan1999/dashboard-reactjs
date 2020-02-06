import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Fab,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./styles";

export class TaskItem extends Component {
  render() {
    const { classes, status, task, onClickEdit, onClickDelete } = this.props;
    return (
      <Card className={classes.cardContent}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{task.title}</Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.CardActions}>
          <Fab color="primary" aria-label="edit" size="small" onClick={onClickEdit}>
            <EditIcon />
          </Fab>
          <Fab color="primary" aria-label="delete" size="small" onClick={onClickDelete}>
            <DeleteIcon />
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskItem);
