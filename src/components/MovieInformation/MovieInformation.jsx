import React, { useState, useEffect } from 'react';
import { Modal, Typography, Button, ButtonGroup, Grid, Box, CircularProgress, Rating, useMediaQuery, Tooltip } from '@mui/material';
import { Movie as MovieIcon, Theaters, Language, PlusOne, Favorite, FavoriteBorderOutlined, Remove, ArrowBack } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import useStyles from './styles';
import { useGetMovieQuery, useGetRecommendationsQuery } from '../../services/TMDB';
import { MovieList } from '../index';
import { selectGenre } from '../../features/genre';
import genreIcons from '../../assets/genres';

const MovieInformation = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { data, error, isFetching } = useGetMovieQuery({ id });
  const { data: recommendations, isFetching: isFetchingRecommendations, isError: errorRecommendations } = useGetRecommendationsQuery({ movie_id: id, list: '/recommendations' });
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width: 310px)');
  if (isFetching) {
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
  const addToFavorites = () => {

  };

  const addToWatchList = () => {

  };

  const isMovieFavorited = true;
  const isMovieWatchlisted = true;
  console.log(recommendations);
  return (
    <>
      <Grid container className={classes.containerSpaceAround}>
        <Grid className={classes.posterContainer} item sm={12} lg={4}>
          <Box className={classes.poserImgContainer}>
            <img src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} alt={data?.title} className={classes.poster} />
          </Box>
        </Grid>
        <Grid item container lg={7} direction="column">
          <Grid item>
            <Typography variant="h3" align="center" className={classes.title} gutterBottom>
              {data?.title} ( {data?.release_date?.slice(0, 4)} )
            </Typography>
            <Typography variant="h5" align="center" className={classes.tagline} gutterBottom>
              {data?.tagline}
            </Typography>
            <Grid item className={classes.containerSpaceAround}>
              <Box className={classes.containerSpaceBetween}>
                <Rating name="read-only" value={data.vote_average / 2} readOnly sx={{ marginRight: '0px' }} />
                <Typography variant="subtitle1" className={classes.rating} sx={{ marginRight: '10px' }} gutterBottom>
                  {Math.trunc(data.vote_average * 10) / 10} / 10 [{data?.vote_count} votes]
                </Typography>
                <Typography variant="subtitle1" className={classes.duration} gutterBottom>
                  {data?.runtime} min / {data?.spoken_languages[data?.spoken_languages.findIndex(
                    (x) => x.iso_639_1 === data.original_language,
                  )
                  ]?.english_name}
                </Typography>
              </Box>
            </Grid>
            <Grid item className={classes.genresContainer}>
              {data?.genres.map((genre) => (
                <Link className={classes.Links} to="/" key={genre.id} onClick={() => { dispatch(selectGenre(genre.id)); }}>
                  <img src={genreIcons[genre.name.toLowerCase()]} className={classes.genreImage} height={30} />
                  <Typography color="textPrimary" variant="subtitle1">{genre?.name}</Typography>
                </Link>
              ))}
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h5" className={classes.title} gutterBottom>
              Overview
            </Typography>
            <Typography variant="body1" className={classes.overview} gutterBottom>
              {data?.overview}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" className={classes.title} gutterBottom>
              Production Companies
            </Typography>
            <Grid item className={classes.centerLeftContainer}>
              {data?.production_companies.map((company) => (
                company.logo_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${company?.logo_path}`}
                    alt={company?.name}
                    className={classes.companyLogo}
                  />
                ) : (
                  <Typography variant="overline" className={classes.companyName} gutterBottom sx={{ marginRight: '10px' }}>
                    {company?.name}
                  </Typography>
                )
              ))}
            </Grid>
          </Grid>
          <Grid>
            <Typography variant="h5" className={classes.title} gutterBottom>
              Top Cast
            </Typography>
            <Grid container spacing={1} className={classes.centerLeftContainer} sx={{ alignItems: 'start !important' }}>
              {data?.credits.cast.slice(0, 6).map((cast, i) => (
                cast.profile_path && (
                <Grid className={classes.castGrid} key={i} item xs={4} md={2} component={Link} to={`/actors/${cast.id}`} style={{ textDecoration: 'none' }}>
                  <img src={`https://image.tmdb.org/t/p/w500${cast?.profile_path}`} alt={cast?.name} className={classes.castImage} />
                  <Typography color="textPrimary" align="center">{cast?.name}</Typography>
                  <Typography color="textSecondary" align="center">
                    {cast.character.split('/')[0]}
                  </Typography>
                </Grid>
                )
              ))}
            </Grid>
          </Grid>
          <Grid container>
            <Box className={classes.buttonsContainer}>
              <Box>
                <ButtonGroup sx={{ margin: '1em 0' }} size="small" variant="outlined" color="primary" aria-label="contained primary button group">
                  <Tooltip disableHoverListener={!isMobile} title="Website">
                    <Button target="_blank" href={data?.homepage} startIcon={<Language />}>{!isMobile && 'Website'}</Button>
                  </Tooltip>
                  <Tooltip disableHoverListener={!isMobile} title="IMDB">
                    <Button target="_blank" href={`https://www.imdb.com/title/${data?.imdb_id}`} startIcon={<MovieIcon />}>{!isMobile && 'IMDB'}</Button>
                  </Tooltip>
                  <Tooltip disableHoverListener={!isMobile} title="Trailer">
                    <Button onClick={() => {}} href="#" startIcon={<Theaters />}>{!isMobile && 'Trailer'}</Button>
                  </Tooltip>
                </ButtonGroup>
              </Box>
              <Box>
                <ButtonGroup sx={{ marginBottom: '1em 0' }} size="small" variant="outlined" color="primary" aria-label="contained primary button group">
                  <Tooltip disableHoverListener={!isMobile} title={(isMovieFavorited ? 'Unfavorite' : 'Favorite')}>
                    <Button classes={{ startIcon: classes.btnIcon }} onClick={addToFavorites} startIcon={isMovieFavorited ? <FavoriteBorderOutlined /> : <Favorite />}>
                      {!isMobile && (isMovieFavorited ? 'Unfavorite' : 'Favorite')}
                    </Button>
                  </Tooltip>
                  <Tooltip disableHoverListener={!isMobile} title="Watch list">
                    <Button onClick={addToWatchList} startIcon={isMovieWatchlisted ? <Remove /> : <PlusOne />}>
                      {!isMobile && 'Watch list'}
                    </Button>
                  </Tooltip>
                  <Tooltip disableHoverListener={!isMobile} title="Back">
                    <Button startIcon={<ArrowBack />}>
                      <Typography variant="subtitle2" component={Link} to="/" color="inherit" sx={{ textDecoration: 'none' }}>
                        {!isMobile && 'Back'}
                      </Typography>
                    </Button>
                  </Tooltip>
                </ButtonGroup>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Box marginTop="5rem" width="100%">
        <Typography variant="h3" gutterBottom align="center">
          Similar Movies
        </Typography>
        {(() => {
          if (isFetchingRecommendations) {
            return (
              <Box className={classes.colBox}>
                <CircularProgress />
              </Box>
            );
          }
          if (errorRecommendations) {
            return (
              <Box className={classes.colBox}>
                <p>Something went wrong...</p>
              </Box>
            );
          }
          return (recommendations.results.length > 0 ? <MovieList movies={recommendations} numberOfMovies={12} />
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

export default MovieInformation;
