import { Avatar, Box, Button, ButtonGroup, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";


export default function Users(){
    const [users, setUsers] = useState([]);
    useEffect(() => {
        UsersGet()
    },[])

    const UsersGet = () => {
        fetch("http://localhost:5000/users")
            .then(res => res.json())
            .then(
                (result) => {
                    setUsers(result)
                }
            )
    }
    
const UserDelete = id => {
    var data = {
        'id': id
    }
    fetch("http://localhost:5000/users/delete", {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(
        (result) => {
            if (result['affectedRows'] > 0) {
                UsersGet()
            }
        }
    )
}
    const UpdateUser = id => {
        window.location = '/update/' + id
    }

    const CreateUser = () => {
        window.location = '/create'
    }

    return (
        <Container sx={{ p:2 }} maxWidth="lg">    
          <Paper sx={{ p:2 }}>
            <Box display="flex">
              <Box flexGrow={1}>
                <Typography component="h2" variant="h6" color="primary" gutterBottom>
                  USERS
                </Typography>
              </Box>
              <Box>
                <Link to="/create">
                  <Button variant="contained" color="primary">
                    CREATE
                  </Button>
                </Link>
              </Box>
            </Box>
            <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">ID</TableCell>
                  <TableCell align="center">Avatar</TableCell>
                  <TableCell align="left">First</TableCell>
                  <TableCell align="left">Last</TableCell>
                  <TableCell align="left">Username</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.ID}>
                    <TableCell align="right">{user.id}</TableCell>
                    <TableCell align="center">
                      <Box display="flex" justifyContent="center">
                        <Avatar src={user.avatar} />
                      </Box>
                    </TableCell>
                    <TableCell align="left">{user.fname}</TableCell>
                    <TableCell align="left">{user.lname}</TableCell>
                    <TableCell align="left">{user.username}</TableCell>
                    <TableCell align="center">
                      <ButtonGroup color="primary" aria-label="outlined primary button group">
                        <Button onClick={() => UpdateUser(user.id)}>Edit</Button>
                        <Button onClick={() => UserDelete(user.id)}>Del</Button>
                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Paper>
        </Container>
       
      );
}
