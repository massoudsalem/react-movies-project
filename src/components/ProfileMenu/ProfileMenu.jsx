import { AccountCircle, Logout } from '@mui/icons-material';
import { Button, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const ProfileMenu = ({ user, isMobile }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = () => {
    localStorage.clear();
    window.location.href = '/logout';
  };
  return (
    <>
      <Tooltip className={classes.tooltip} title="Account settings">
        {!isMobile ? (
          <Button
            onClick={handleClick}
            className={classes.linkButton}
          >
            {user.name}
            <AccountCircle className={classes.avatar} />
          </Button>
        ) : (
          <IconButton
            onClick={handleClick}
            className={classes.linkButton}
          >
            <AccountCircle className={classes.avatar} />
          </IconButton>
        )}
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClick={handleClose}
      >
        <MenuItem component={Link} to={`/profile/${user.id}`} onClick={handleClose}>
          <ListItemIcon>
            <AccountCircle fontSize="small" />
          </ListItemIcon>
          {user.name}
        </MenuItem>
        <Divider />
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProfileMenu;
