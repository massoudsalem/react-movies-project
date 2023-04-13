import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography, useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { useParams, useSearchParams } from 'react-router-dom';
import { useGetMoviesQuery } from '../../services/TMDB';
import MovieList from '../MovieList/MovieList';
import Pagination from '../Pagination/Pagination';
import { searchMovie } from '../../features/genre';

const Movies = () => {
  const [page, setPage] = useState(1);
  const { selectedGenre, searchTerm } = useSelector((state) => state.genre);
  const { data, error, isFetching } = useGetMoviesQuery({ selectedGenre, page, searchTerm });
  const lg = useMediaQuery((theme) => theme.breakpoints.only('lg'));
  const numberOfMovies = lg ? 16 : 18;
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchParams.get('search')) {
      dispatch(searchMovie(searchParams.get('search')));
    }
  }, [searchParams]);

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="6rem" />
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
      {category && (
      <Typography variant="h3" align="center" sx={{ margin: '1em 0' }}>
        {category}
      </Typography>
      )}
      <MovieList movies={data} numberOfMovies={numberOfMovies} />
      <Pagination page={page} setPage={setPage} totalPages={data?.total_pages} />
    </Box>
  );
};

export default Movies;
