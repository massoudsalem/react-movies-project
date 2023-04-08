import { ExitToApp } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const logout = () => {
  localStorage.clear();
  window.location.href = '/logout';
};

const Profile = () => {
  const favoriteMovies = [];
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>My Profile</Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies.length
        ? <Typography variant="h5">Add favorite or watch list same movies to see them here!</Typography>
        : (
          <Box>
            favoriteMovies
          </Box>
        )}
    </Box>
  );
};

export default Profile;
