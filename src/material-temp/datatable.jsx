import React, { useState, useEffect } from "react";
import {
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  IconButton,
  TextField,
  Box,
  TablePagination,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";

const DataTable = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(3);
  const getUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(res.data);
  };

  const onDelete = async (id) => {
    console.log(id);
    await axios.delete("https://jsonplaceholder.typicode.com/users/" + id);
    const usrs = users.filter((user) => user.id !== id);
    setUsers(usrs);
  };

  const onUpdate = (id) => {
    console.log(id);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const onChangePage = (event, pageIndex) => {
    setPage(pageIndex);
  };

  const onChangeRowsPerPage = (event) => {
    setLimit(event.target.value);
  };
  return (
    <Container>
      <TableContainer
        component={Paper}
        elevation={3}
        style={{ margin: "80px auto", padding: "20px" }}
      >
        <Box>
          <IconButton>
            <AddIcon></AddIcon>
          </IconButton>
        </Box>
        <Table>
          <TableHead style={{ backgroundColor: "#f8bbd0" }}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.slice(page * limit, page * limit + limit).map((user) => (
              <TableRow>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.address.city}</TableCell>
                <TableCell>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => onDelete(user.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[3, 5, 10, 15, 25, 50]}
          count={users.length}
          rowsPerPage={limit}
          page={page}
          onChangePage={onChangePage}
          onChangeRowsPerPage={onChangeRowsPerPage}
        />
      </TableContainer>
    </Container>
  );
};

export default DataTable;
