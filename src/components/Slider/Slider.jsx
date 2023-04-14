import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Box, Card, CardContent, CardMedia, IconButton, MobileStepper, Typography } from '@mui/material';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Slider = ({ interval = 2500, movies, slides }) => {
  const timerRef = useRef();
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [movie, setMovie] = useState(movies.results[0]);

  const handleNext = useCallback(() => {
    setActiveStep((prevActiveStep) => (prevActiveStep < (slides - 1) ? prevActiveStep + 1 : 0));
  }, [activeStep]);
  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep > 0 ? prevActiveStep - 1 : slides - 1));
  };

  useEffect(() => {
    setMovie(movies.results[activeStep]);
  }, [activeStep]);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setTimeout(() => {
      handleNext();
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [handleNext]);

  return (
    <Box className={classes.sliderContainer}>
      <Card className={classes.sliderCard}>
        {/*{children[activeStep]}*/}
        <CardMedia
          key={movie?.backdrop_path}
          className={classes.sliderImage}
          image={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie?.title}
          component={Link}
          to={`/movie/${movie.id}`}
        />
        <CardContent
          className={classes.sliderContent}
          key={`${movie?.backdrop_path}content`}
        >
          <Typography gutterBottom variant="h4" component="div">
            {movie?.title}
          </Typography>
          <Typography variant="body2">
            {movie?.overview}
          </Typography>
        </CardContent>
        <MobileStepper
          className={classes.sliderStepper}
          variant="dots"
          steps={slides}
          position="static"
          activeStep={activeStep}
          nextButton={<span />}
          backButton={<span />}
        />
        <IconButton
          color="primary"
          disabled={false}
          size="large"
          className={classes.sliderButton}
          variant="outlined"
          sx={(theme) => ({
            right: '2%',
            [theme.breakpoints.down('sm')]: {
              right: '0',
            },
          })}
          onClick={handleNext}
        >
          <ArrowForward />
        </IconButton>
        <IconButton
          color="primary"
          disabled={false}
          size="large"
          className={classes.sliderButton}
          variant="outlined"
          sx={(theme) => ({
            left: '2%',
            [theme.breakpoints.down('sm')]: {
              left: '0',
            },
          })}
          onClick={handleBack}
        >
          <ArrowBack />
        </IconButton>
      </Card>
    </Box>
  );
};

export default Slider;
