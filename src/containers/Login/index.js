import React from "react";
import { withStyles } from "@material-ui/styles";
import {
  CardContent,
  Card,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./styles";
function Login({ classes }) {
  return (
    <div className={classes.container}>
      <div className={classes.login}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="caption" display="block" gutterBottom>
              Sign in with your account
            </Typography>
            <form>
              <div>
                <TextField
                  id="email"
                  label="Email"
                  className={classes.textField}
                  margin="normal"
                />
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  className={classes.textField}
                  margin="normal"
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className={classes.textField}
                >
                  Login
                </Button>
                <div>
                  <Link to="/signup">
                    <Button>Đến Trang Đăng Ký</Button>
                  </Link>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default withStyles(styles)(Login);
