import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Actors, MovieInformation, Movies, NavBar, Profile } from '.';

const App = () => (
  <div>
    <NavBar />
    <main>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieInformation />} />
        <Route path="/actors/:id" element={<Actors />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </main>
  </div>
);

export default App;
