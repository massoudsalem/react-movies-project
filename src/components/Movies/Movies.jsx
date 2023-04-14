import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography, useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

import { Slider, Pagination, MovieList } from '..';
import { useGetGenresQuery, useGetMoviesQuery } from '../../services/TMDB';
import { searchMovie, selectGenre } from '../../features/genre';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const Movies = () => {
  const [page, setPage] = useState(1);
  const { selectedGenre, searchTerm } = useSelector((state) => state.genre);
  const { data, error, isFetching } = useGetMoviesQuery({ selectedGenre, page, searchTerm });
  const lg = useMediaQuery((theme) => theme.breakpoints.only('lg'));
  const numberOfMovies = lg ? 16 : 18;
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const currentLocation = useLocation();
  const homepage = currentLocation.pathname === '/';
  const genres = useGetGenresQuery();

  useEffect(() => {
    if (searchParams.get('q') && currentLocation.pathname === '/search') {
      dispatch(searchMovie(searchParams.get('q')));
    }
  }, [searchParams]);

  useEffect(() => {
    if (genres.data) {
      const genre = genres.data.genres.find((g) => g.name === category);
      if (genre) {
        dispatch(selectGenre(genre.id));
      } else if (category) {
        const categoryValue = categories.find((c) => c.label === category);
        if (categoryValue) {
          dispatch(selectGenre(categoryValue.value));
        }
      }
    }
  }, [category, genres.data]);

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
      {homepage && <Slider movies={data} slides={6} />}
      <MovieList movies={data} numberOfMovies={numberOfMovies} />
      <Pagination page={page} setPage={setPage} totalPages={data?.total_pages} />
    </Box>
  );
};

export default Movies;
