import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import LockOpenRoundedIcon from "@material-ui/icons/LockOpenRounded";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: "60vh",
    width: "30%",
    margin: "80px auto",
    padding: 30,
  },
  btn: {
    padding: 10,
    fontSize: 18,
    marginLeft: 10,
  },
});
const Login = () => {
  const classes = useStyles();
  return (
    <Grid>
      <Paper elevation={3} className={classes.root}>
        <form className={classes.form}>
          <Grid align="center" style={{ marginBottom: 20 }}>
            <Avatar variant="square" className={classes.square}>
              <LockOpenRoundedIcon />
            </Avatar>
            <h3>Login Form</h3>
          </Grid>
          <TextField
            id="outlined-basic"
            label="Email"
            placeholder="Enter email address"
            variant="outlined"
            fullWidth
            required
            type="email"
            style={{ marginBottom: 10 }}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            placeholder="Enter password"
            variant="outlined"
            fullWidth
            required
            type="password"
            style={{ marginBottom: 10 }}
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            style={{ marginBottom: 10 }}
          >
            Submit
          </Button>
          <small>
            Not a member? <a href="#">signup</a> now
          </small>
        </form>
      </Paper>
    </Grid>
  );
};

export default Login;
