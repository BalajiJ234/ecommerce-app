import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Box } from "@material-ui/core";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <AppBar color="secondary">
        <Toolbar>
          <Box border={1} p={1} borderRadius={16}>
            <Typography variant="h6">MyApp</Typography>
          </Box>
          <Button color="inherit" component={NavLink} to="/home">
            Home
          </Button>
          <Button color="inherit" component={NavLink} to="/users">
            Users
          </Button>
          <Button color="inherit" component={NavLink} to="/about">
            About us
          </Button>
          <Button color="inherit" component={NavLink} to="/contact">
            Contact us
          </Button>

          <Button
            to="/login"
            color="inherit"
            style={{ marginLeft: "auto" }}
            component={NavLink}
          >
            Login
          </Button>
          <Button to="/register" color="inherit" component={NavLink}>
            Register
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
