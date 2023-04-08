import React, { useEffect, useState } from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { Sidebar, SearchBar, ProfileMenu } from '..';
import { fetchSessionID, fetchToken, moviesApi } from '../../utils';
import { setUserData } from '../../features/auth';

const NavBar = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width: 600px)');
  const theme = useTheme();
  const dispatch = useDispatch();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const token = localStorage.getItem('request_token');
  const session_id_ls = localStorage.getItem('session_id');

  useEffect(() => {
    const logInUser = async () => {
      if (token) {
        if (session_id_ls) {
          const { data: userData } = await moviesApi.get('/account', {
            params: {
              session_id: session_id_ls,
            },
          });
          dispatch(setUserData(userData));
        } else {
          const session_id = await fetchSessionID();
          const { data: userData } = await moviesApi.get('/account', {
            params: {
              session_id,
            },
          });
          dispatch(setUserData(userData));
        }
      }
      console.log('user', user);
    };
    logInUser();
  }, [token]);
  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ outline: 'none' }}
            onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          )}
          <IconButton sx={{ ml: 1 }} color="inherit" aria-label="menu" onClick={() => {}}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <SearchBar />}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={fetchToken}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <ProfileMenu user={user} isMobile={isMobile} />
            )}
          </div>
          {isMobile && <SearchBar />}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor={theme.direction !== 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              className={classes.drawerBackground}
              classes={{ paper: classes.drawerpaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
};

export default NavBar;
