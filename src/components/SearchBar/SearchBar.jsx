import React, { useState } from 'react';
import { TextField, InputAdornment, Box } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import useStyles from './styles';
import { searchMovie } from '../../features/genre';

const SearchBar = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSearch = (e) => {
    if (searchTerm.trim() === '') return;
    if (e.key === 'Enter') {
      navigate('/');
      dispatch(searchMovie(searchTerm));
    }
  };
  return (
    <Box className={classes.SearchBar}>
      <TextField
        className={classes.search}
        placeholder="Search..."
        value={searchTerm}
        variant="standard"
        type="search"
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleSearch}
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
