import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
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

const redLogo = 'src/assets/images/red_logo.png';
const blueLogo = 'src/assets/images/blue_logo.png';

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();
  const { data, isLoading, error } = useGetGenresQuery();
  const dispatch = useDispatch();
  const selectedGenre = useSelector((state) => state.genre.selectedGenre);
  const currentLocation = useLocation();
  const category = currentLocation.pathname.includes('category');
  useEffect(() => {
    setMobileOpen(false);
  }, [currentLocation]);
  return (
    <>
      <Link to="/" className={classes.imageLink} onClick={() => { dispatch(selectGenre('popular')); }}>
        <img
          className={classes.image}
          src={theme.palette.mode !== 'light' ? redLogo : blueLogo}
          alt="Filmpire Logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ value, label }) => (
          <Link key={value} to={`/category/${label}`} className={classes.link}>
            <ListItem button disabled={selectedGenre === value && (category)} onClick={() => { dispatch(selectGenre(value)); }}>
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
            <Link key={id} to={`/category/${name}`} className={classes.link}>
              <ListItem button disabled={selectedGenre === id && (category)} onClick={() => { dispatch(selectGenre(id)); }}>
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
