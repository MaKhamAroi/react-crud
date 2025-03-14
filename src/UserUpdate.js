import { Button, Container, Grid2, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function UserUpdate(){
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPass] = useState('');
    const [avatar, setAvatar] = useState('');

    const {id} = useParams();
    useEffect(() => {
        fetch("http://localhost:5000/users/" + id)
            .then(res => res.json())
            .then(
                (result) => {
                    setFname(result[0].fname)
                    setLname(result[0].lname)
                    setUsername(result[0].username)
                    setPass(result[0].password)
                    setAvatar(result[0].avatar)
                }
            )
    }, [id])

    const handleSubmit = event =>{
        event.preventDefault();
        var data = {
            'id' : id,
            'fname' : fname,
            'lname' : lname,
            'username' : username,
            'password' : password,
            'avatar' : avatar
        }
        fetch("http://localhost:5000/users/update",{
            method : 'PUT',
            headers : {
                Accept : 'application/from-data','Content-Type': 'application/json',},
                body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(
            (result) => {
                if(result['affectedRows'] >=1){
                    window.location.href = '/';
                }
            }
        )
    }

    return (
        <Container sx={{ p:2 }} maxWidth="sm">    
          <div>
            <Typography component="h1" variant="h5">
              User
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid2 container sx={{ pt:2 }} spacing={2}>
                <Grid2 item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    autoFocus
                  />
                </Grid2>
                <Grid2 item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                  />
                </Grid2>
                <Grid2 item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Grid2>
                <Grid2 item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="password"
                    label="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPass(e.target.value)}
                  />
                </Grid2>
                <Grid2 item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="avatar"
                    label="Avatar"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                  />
                </Grid2>
                <Grid2 item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Update
                </Button>
                </Grid2>
              </Grid2>
            </form>
          </div>
        </Container>
      );
     
}