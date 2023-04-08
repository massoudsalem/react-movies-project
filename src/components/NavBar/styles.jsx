import { makeStyles } from '@mui/styles';

const drawerWidth = 240;
const fixSm = 601;
export default makeStyles((theme) => ({
  toolbar: {
    height: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '240px',
    [theme.breakpoints.down(fixSm)]: {
      marginLeft: 0,
      flexWrap: 'wrap',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(fixSm)]: {
      display: 'none',
    },
  },
  drawer: {
    [theme.breakpoints.up(fixSm)]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  linkButton: {
    '&:hover': {
      color: 'white !important',
      textDecoration: 'none',
    },
  },
}));
