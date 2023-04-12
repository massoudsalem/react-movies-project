import React, { useState } from 'react';
import { Box, CircularProgress, Typography, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';

import { useGetMoviesQuery } from '../../services/TMDB';
import MovieList from '../MovieList/MovieList';
import Pagination from '../Pagination/Pagination';

const Movies = () => {
  const [page, setPage] = useState(1);
  const { selectedGenre, searchTerm } = useSelector((state) => state.genre);
  const { data, error, isFetching } = useGetMoviesQuery({ selectedGenre, page, searchTerm });
  const lg = useMediaQuery((theme) => theme.breakpoints.only('lg'));
  const numberOfMovies = lg ? 16 : 18;
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data?.results?.length) {
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
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: '0 auto', flexDirection: 'column', alignItems: 'center' }}>
      <MovieList movies={data} numberOfMovies={numberOfMovies} />
      <Pagination page={page} setPage={setPage} totalPages={data?.total_pages} />
    </Box>
  );
};

export default Movies;
