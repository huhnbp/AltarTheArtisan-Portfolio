import * as React from 'react';
import { Container, Grid, Paper, TextField, Button, Typography, Box } from '@mui/material';
import AltarPhoto from '../assets/AltarPhoto.jpg';

const Home = () => {
    return (
        <Paper id="about" elevation={3} sx={{ padding: 3, marginBottom: 4, bgcolor: '#F9aecd' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <img src={AltarPhoto} alt="pfp" style={{width:'50%'}}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div id="abMe">
                        <Typography variant="h4" gutterBottom>
                            About Me
                        </Typography>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                             fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                             deserunt mollit anim id est laborum.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </Paper>
      );
}

export default Home;