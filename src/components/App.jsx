import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import useStyles from './styles';
import { Actors, MovieInformation, Movies, NavBar, Profile, Toast } from '.';
import ProfileMenu from './ProfileMenu/ProfileMenu';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieInformation />} />
            <Route path="/actors/:id" element={<Actors />} />
            <Route path="/profile/:id" element={<Profile />} />
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
            <Route path="/menu" element={<ProfileMenu user={{ name: 'name', id: 16541 }} />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;
