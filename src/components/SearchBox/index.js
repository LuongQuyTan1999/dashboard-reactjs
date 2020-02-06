import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import TextField from "@material-ui/core/TextField";

const SearchBox = ({ classes, handleChange }) => {
  return (
    <div>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          autoComplete="off"
          className={classes.textFiled}
          id="standard-password-input"
          label="SearchBox"
          type="text"
          placeholder="Nhap Tu Khoa"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default withStyles(styles)(SearchBox);
