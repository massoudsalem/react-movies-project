import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import useStyles from './styles';
import { Actors, MovieInformation, Movies, NavBar, Profile, Slider, Toast } from '.';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/search/" element={<Movies />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/category/:category" element={<Movies />} />
          <Route
            path="/approved"
            element={(
              <>
                <Toast msg="Login Successful!" />
                <Movies />
              </>
            )}
          />
          <Route
            path="/logout"
            element={(
              <>
                <Toast msg="Logout Successful!" />
                <Movies />
              </>
            )}
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
