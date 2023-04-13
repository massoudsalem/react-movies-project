import React, { useState } from 'react';
import { TextField, InputAdornment, Box } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useNavigate, useSearchParams } from 'react-router-dom';

import useStyles from './styles';

const SearchBar = () => {
  const classes = useStyles();
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search'));
  const navigate = useNavigate();
  const handleSearch = (e) => {
    if (searchTerm.trim() === '') return;
    if (e.key === 'Enter') {
      navigate(`/?search=${searchTerm}`);
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
