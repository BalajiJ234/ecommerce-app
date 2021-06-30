import {
  Typography,
  Paper,
  Grid,
  TextField,
  InputLabel,
  FormControl,
  Button,
  Select,
} from "@material-ui/core";
import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userId: "",
        password: "",
        role: "",
      },
    };
  }
  handleChange = (event) => {
    console.log("handleChange");
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    //this.setState({ user: user });
    this.setState({ user });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    axios
      .post("http://localhost:8082/login", this.state.user)
      .then((res) => this.props.history.push("/users"));
  };
  render() {
    return (
      <Grid
        item
        md={6}
        style={{
          marginTop: "20px",
          marginLeft: "auto",
          marginRight: "auto",
        }}>
        <Typography variant='h5' style={{ marginTop: "70px" }}>
          Login Form
        </Typography>
        <Paper elevation={3} style={{ padding: "30px", marginTop: "10px" }}>
          <form onSubmit={this.handleSubmit}>
            <TextField
              id='outlined-email'
              label='Email'
              placeholder='Enter email'
              variant='outlined'
              type='email'
              name='email'
              value={this.state.user.email}
              onChange={this.handleChange}
              fullWidth
              style={{ marginBottom: 10 }}
            />
            <TextField
              id='outlined-password'
              label='Password'
              placeholder='Enter password'
              variant='outlined'
              type='password'
              name='password'
              value={this.state.user.password}
              onChange={this.handleChange}
              fullWidth
              style={{ marginBottom: 10 }}
            />
            <FormControl
              variant='filled'
              fullWidth
              style={{ marginBottom: 10 }}>
              <InputLabel htmlFor='filled-role-native-simple'>Role</InputLabel>
              <Select
                native
                value={this.state.user.role}
                name='role'
                onChange={this.handleChange}
                inputProps={{
                  name: "role",
                  id: "filled-role-native-simple",
                }}>
                <option aria-label='None' value='' />
                <option value='customer'>Customer</option>
                <option value='user'>User</option>
                <option value='admin'>Admin</option>
              </Select>
            </FormControl>
            <Button variant='contained' color='primary' type='submit' fullWidth>
              Login
            </Button>
          </form>
        </Paper>
      </Grid>
    );
  }
}

export default Login;
