import React from "react";
import { withStyles } from "@material-ui/styles";
import {
  CardContent,
  Card,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./styles";
function Signup({ classes }) {
  return (
    <div className={classes.container}>
      <div className={classes.signup}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="caption" display="block" gutterBottom>
              Signup Acount Here
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
                <TextField
                  id="Repassword"
                  label="RePassword"
                  type="password"
                  autoComplete="current-password"
                  className={classes.textField}
                  margin="normal"
                />
                <FormControlLabel
                  control={<Checkbox value="agree"/>}
                  label="Tôi đã đóc điều khoản và đồng ý với nó"
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className={classes.textField}
                >
                  Signup
                </Button>
                <div>
                  <Link to="/login">
                    <Button>Quay Lại Login</Button>
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

export default withStyles(styles)(Signup);
