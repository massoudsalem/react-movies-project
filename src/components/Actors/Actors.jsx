import { ArrowBack, Movie as MovieIcon } from '@mui/icons-material';
import { Box, Button, ButtonGroup, CircularProgress, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetActorQuery, useGetMoviesByActorIdQuery } from '../../services/TMDB';
import { MovieList, Pagination } from '..';
import useStyles from './styles';

const Actors = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetActorQuery(id);
  const classes = useStyles();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { data: actorMovies, isFetching: isFetchingActorMovies, isError: errorActorMovies } = useGetMoviesByActorIdQuery({ id, page });

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }
  if (error) {
    return (
      <Box display="flex" justifyContent="center">
        <Typography variant="h4">
          There was an error fetching the movie.
        </Typography>
      </Box>
    );
  }
  console.log(data);
  return (
    <>
      <Grid container className={classes.containerSpaceAround}>
        <Grid className={classes.posterContainer} item sm={12} lg={4}>
          <Box className={classes.poserImgContainer}>
            <img src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`} alt={data?.title} className={classes.poster} />
          </Box>
        </Grid>
        <Grid item container lg={7} direction="column">
          <Grid item>
            <Typography variant="h3" align="center" className={classes.title} gutterBottom>
              {data.name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" className={classes.title} gutterBottom>
              Born: {new Date(data?.birthday).toDateString()}
            </Typography>
            <Typography variant="body1" className={classes.overview} gutterBottom>
              {data?.biography || 'Sorry, no biography yet...'}
            </Typography>
          </Grid>
          <Grid container className={classes.centerLeftContainer}>

            <Box className={classes.buttonsContainer}>
              <ButtonGroup sx={{ margin: '1em 0' }} size="small" variant="outlined" color="primary" aria-label="contained primary button group">
                <Button classes={{ startIcon: classes.btnIcon }} target="_blank" href={`https://www.imdb.com/name/${data?.imdb_id}`} startIcon={<MovieIcon />}>IMDB</Button>
              </ButtonGroup>
            </Box>
            <Box className={classes.buttonsContainer}>
              <ButtonGroup sx={{ marginBottom: '1em 0' }} size="small" variant="outlined" color="primary" aria-label="contained primary button group">
                <Button classes={{ startIcon: classes.btnIcon }} startIcon={<ArrowBack />} onClick={() => { navigate(-1); }}>
                  Back
                </Button>
              </ButtonGroup>
            </Box>

          </Grid>
        </Grid>
      </Grid>
      <Box marginTop="5rem" width="100%">
        <Typography variant="h3" gutterBottom align="center">
          Similar Movies
        </Typography>
        {(() => {
          if (isFetchingActorMovies) {
            return (
              <Box className={classes.colBox}>
                <CircularProgress />
              </Box>
            );
          }
          if (errorActorMovies) {
            return (
              <Box className={classes.colBox}>
                <p>Something went wrong...</p>
              </Box>
            );
          }
          return (actorMovies.results.length > 0
            ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', margin: '0 auto', flexDirection: 'column', alignItems: 'center' }}>
                <MovieList movies={actorMovies} numberOfMovies={12} />
                <Pagination page={page} setPage={setPage} totalPages={actorMovies?.total_pages} />
              </Box>
            )
            : (
              <Typography variant="subtitle2" gutterBottom align="center">
                Sorry, no similar movies found.
              </Typography>
            ));
        }
        )()}
      </Box>
    </>
  );
};

export default Actors;
