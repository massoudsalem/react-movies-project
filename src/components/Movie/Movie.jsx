import React from 'react';
import { Typography, Grid, Grow, Tooltip, Rating, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Movie = ({ movie, i }) => {
  //console.log(movie, i);
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} className={classes.movie}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link to={`/movie/${movie.id}`} className={classes.link}>
          <Box className={classes.colBox}>
            <Tooltip disableTouchListener title={movie.release_date}>
              <Typography variant="h7" className={classes.movieYear}>
                {movie.release_date?.split('-')[0]}
              </Typography>
            </Tooltip>
            <Tooltip disableTouchListener title={movie.overview}>
              <img
                src={movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : 'https://www.movienewz.com/img/films/poster-holder.jpg'}
                alt={movie.title}
                className={classes.movieImage}
              />
            </Tooltip>
          </Box>
          <Typography variant="h5" className={classes.movieTitle}>{movie.title}</Typography>
          <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>

  );
};

export default Movie;
