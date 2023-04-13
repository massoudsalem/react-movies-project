import { ExitToApp } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetListQuery } from '../../services/TMDB';
import MovieList from '../MovieList/MovieList';

const logout = () => {
  localStorage.clear();
  window.location.href = '/logout';
};

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const { data: favoriteMovies, refetch: refetchFavorites } = useGetListQuery({
    listName: 'favorite/movies',
    accountId: user.id,
    sessionId: localStorage.getItem('session_id'),
    page: 1,
  });
  const { data: watchlistedMovies, refetch: refetchWatchlisted } = useGetListQuery({
    listName: 'watchlist/movies',
    accountId: user.id,
    sessionId: localStorage.getItem('session_id'),
    page: 1,
  });
  const refetchData = () => {
    refetchFavorites();
    refetchWatchlisted();
  };

  useEffect(() => {
    window.addEventListener('focus', refetchData);
    refetchData();
    return () => window.removeEventListener('focus', refetchData);
  }, []);

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography
          variant="h4"
          gutterBottom
        >{`${user.name}'s Profile`}
        </Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies?.results?.length
      && !watchlistedMovies?.results?.length ? (
        <Typography variant="h5">
          Add favorite or watch list same movies to see them here!
        </Typography>
        ) : (
          <Box>
            {favoriteMovies?.results?.length > 0 && (
            <Box>
              <Typography variant="h5" gutterBottom>
                Favorites
              </Typography>
              <MovieList movies={favoriteMovies} />
            </Box>
            )}
            {watchlistedMovies?.results?.length > 0 && (
            <Box>
              <Typography variant="h5" gutterBottom>
                Watchlisted
              </Typography>
              <MovieList movies={watchlistedMovies} />
            </Box>
            )}
          </Box>
        )}
    </Box>
  );
};

export default Profile;
