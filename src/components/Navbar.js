// import './Navbar.css';
import React from 'react';
import { AppBar, Paper, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar sx={{ backgroundColor: '#292929', padding: '2rem' }}>
      <Paper
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '11rem',
          height: '4.75rem',
          border: '1px solid #fff',
          backgroundColor: '#292929',
          color: 'white',
          margin: '0 auto',
          '@media(min-width: 1000px)': {
            marginLeft: '4.75rem'
          },
        }}
      >
        <Typography
          variant='h1'
          sx={{
            fontSize: '1.75rem',
          }}
        >
          MyTestApp
        </Typography>
      </Paper>
    </AppBar>
  );
};

export default Navbar;
