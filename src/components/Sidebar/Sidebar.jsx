import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';

import useStyles from './styles';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];
const demoCategories = [
  { label: 'Action', value: 'action' },
  { label: 'Comedy', value: 'comedy' },
  { label: 'Horror', value: 'horror' },
  { label: 'Romance', value: 'romance' },
  { label: 'Mystery', value: 'mystery' },
  { label: 'Sci-Fi', value: 'sci-fi' },
  { label: 'Western', value: 'western' },
  { label: 'Animation', value: 'animation' },
  { label: 'Drama', value: 'drama' },
  { label: 'Adventure', value: 'adventure' },
];

const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const Sidebar = () => {
  const theme = useTheme();
  const classes = useStyles();
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
            <ListItem button onClick={() => {}}>
              {/*<ListItemIcon>
                <img src={blueLogo} alt={label} className={classes.genreImages} />
              </ListItemIcon>*/}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
        <Divider />
        <ListSubheader>Genres</ListSubheader>
        {demoCategories.map(({ value, label }) => (
          <Link key={value} to="/" className={classes.link}>
            <ListItem button onClick={() => {}}>
              {/*<ListItemIcon>
                <img src={blueLogo} alt={label} className={classes.genreImages} />
              </ListItemIcon>*/}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>

  );
};

export default Sidebar;
