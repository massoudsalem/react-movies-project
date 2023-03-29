import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

const App = () => (
  <div>
    <main>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<h1>Movies</h1>} />
        <Route path="/movies/:id" element={<h1>Movies Information</h1>} />
        <Route path="/actors/:id" element={<h1>Actors</h1>} />
        <Route path="/profile/:id" element={<h1>Profile</h1>} />
      </Routes>
    </main>
  </div>
);

export default App;
