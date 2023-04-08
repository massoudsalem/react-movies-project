import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { useGetMoviesQuery } from '../../services/TMDB';
import MovieList from '../MovieList/MovieList';

const Movies = () => {
  const { selectedGenre, page, searchTerm } = useSelector((state) => state.genre);
  const { data, error, isFetching } = useGetMoviesQuery({ selectedGenre, page, searchTerm });

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies that match that name.
          <br />
          Please search for something else.
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center">
        <Typography variant="h4">
          There was an error fetching the movies.
        </Typography>
      </Box>
    );
  }
  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;
