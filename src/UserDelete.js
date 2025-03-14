import { Button, Container, Grid2, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

export default function UserDelete() {
    const [id, setId] = useState('');  // Added the 'id' state to capture the user ID for deletion
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPass] = useState('');
    const [avatar, setAvatar] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        var data = {
            'id': id,  // Using the id here
            'fname': fname,
            'lname': lname,
            'username': username,
            'password': password,
            'avatar': avatar
        }
        fetch("http://localhost:5000/users/Delete", {
            method: 'DELETE',  // Fixed the method spelling to 'DELETE' (uppercase)
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(
                (result) => {
                    if (result['affectedRows'] >= 1) {
                        window.location.href = '/';
                    }
                }
            )
    }

    return (
        <Container sx={{ p: 2 }} maxWidth="sm">
            <div>
                <Typography component="h1" variant="h5">
                    Delete User
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid2 container sx={{ pt: 2 }} spacing={2}>
                        <Grid2 item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="id"
                                label="User ID"
                                value={id}  // Binding the 'id' state to the TextField
                                onChange={(e) => setId(e.target.value)}  // Updating 'id' state on input change
                                autoFocus
                            />
                        </Grid2>
                        <Grid2 item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Delete
                            </Button>
                        </Grid2>
                    </Grid2>
                </form>
            </div>
        </Container>
    );
}
