import React from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { useGetGenresQuery } from '../../services/TMDB';
import genresIcon from '../../assets/genres';
import { selectGenre } from '../../features/genre';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const Sidebar = () => {
  const theme = useTheme();
  const classes = useStyles();
  const { data, isLoading, error } = useGetGenresQuery();
  const dispatch = useDispatch();
  const selectedGenre = useSelector((state) => state.genre.selectedGenre);
  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === 'light' ? redLogo : blueLogo}
          alt="Filmpire Logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ value, label }) => (
          <Link key={value} to="/" className={classes.link}>
            <ListItem button disabled={selectedGenre === value} onClick={() => { dispatch(selectGenre(value)); }}>
              <ListItemIcon>
                <img src={genresIcon[label.toLowerCase()]} alt={label} className={classes.genreImages} />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
        <Divider />
        <ListSubheader>Genres</ListSubheader>
        {(() => {
          if (isLoading) {
            return (
              <Box className={classes.colBox}>
                <CircularProgress />
              </Box>
            );
          }
          if (error) {
            return (
              <Box className={classes.colBox}>
                <p>Something went wrong...</p>
              </Box>
            );
          }
          return data.genres.map(({ id, name }) => (
            <Link key={id} to="/" className={classes.link}>
              <ListItem button disabled={selectedGenre === id} onClick={() => { dispatch(selectGenre(id)); }}>
                <ListItemIcon>
                  <img src={genresIcon[name.toLowerCase()]} alt={name} className={classes.genreImages} />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ));
        }
        )()}
      </List>
    </>

  );
};

export default Sidebar;
