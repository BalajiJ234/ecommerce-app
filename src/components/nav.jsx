import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <AppBar color="secondary">
      <Toolbar>
        <Box borderRadius={16} border={1} p={1}>
          <Typography variant="h6">MyApp</Typography>
        </Box>
        <Button color="inherit" component={NavLink} to="/home">
          Home
        </Button>
        <Button color="inherit" component={NavLink} to="/users">
          Users
        </Button>
        <Button color="inherit" component={NavLink} to="/about">
          About
        </Button>
        <Button color="inherit" component={NavLink} to="/contact">
          Contact Us
        </Button>
        <Button
          color="inherit"
          style={{ marginLeft: "auto" }}
          component={NavLink}
          to="/login"
        >
          Login
        </Button>
        <Button color="inherit" component={NavLink} to="/register">
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
