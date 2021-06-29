import { Typography } from "@material-ui/core";
import React, { Component } from "react";
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Container,
  IconButton,
} from "@material-ui/core";
import axios from "axios";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

class Users extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.setState({ users: res.data });
    });
  }

  onDelete = (id) => {
    console.log(id);
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        const users = this.state.users.filter((user) => user.id !== id);
        this.setState({ users: users });
      });
  };
  render() {
    return (
      <Container>
        <TableContainer
          component={Paper}
          elevation={3}
          style={{ padding: "20px", marginTop: "80px" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone No</TableCell>
                <TableCell>Company Name</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.company.name}</TableCell>
                  <TableCell>{user.address.city}</TableCell>
                  <TableCell>
                    <IconButton>
                      <EditOutlinedIcon />
                    </IconButton>
                    <IconButton onClick={() => this.onDelete(user.id)}>
                      <DeleteOutlineOutlinedIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    );
  }
}

export default Users;
