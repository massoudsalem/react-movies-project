import React from 'react';
import { Typography, Grid, Grow, Tooltip, Rating, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Movie = ({ movie, i }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Box className={classes.movieCard}>
          <Box className={classes.colBox}>
            <Tooltip title={movie.release_date}>
              <Typography variant="h7" className={classes.movieYear}>
                {movie.release_date?.split('-')[0] || 'N/A'}
              </Typography>
            </Tooltip>
            <Link to={`/movie/${movie.id}`} className={classes.link}>
              <Tooltip title={movie.overview}>
                <img
                  src={movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : 'https://www.movienewz.com/img/films/poster-holder.jpg'}
                  alt={movie.title}
                  className={classes.movieImage}
                />
              </Tooltip>
            </Link>
          </Box>
          <Tooltip title={movie.title}>
            <Typography variant="h5" className={classes.movieTitle}>{movie.title}</Typography>
          </Tooltip>
          <Tooltip title={`${movie.vote_average} / 10`}>
            <Box>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </Box>
          </Tooltip>
        </Box>
      </Grow>
    </Grid>

  );
};

export default Movie;
