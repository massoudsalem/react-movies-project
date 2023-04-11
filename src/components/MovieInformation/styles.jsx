import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  containerSpaceAround: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '10 0 !important',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
  },
  containerSpaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10 0 !important',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      flexDirection: 'column',
      flexWrap: 'wrap',
      alignItems: 'center',
    },
  },
  centerLeftContainer: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center !important',
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '20px',
  },
  posterContainer: {
    [theme.breakpoints.up('lg')]: {
      position: 'relative',
      flexDirection: 'column',
      flexGrow: 1,
      marginBottom: '0px',
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto !important',
    },
  },
  poserImgContainer: {
    [theme.breakpoints.up('lg')]: {
      position: 'relative',
      flexGrow: 1,
    },
    marginBottom: '30px',
    maxWidth: '500px',
    [theme.breakpoints.down('sm')]: {
      padding: '0 2em',
    },
  },
  poster: {
    [theme.breakpoints.up('lg')]: {
      position: 'sticky',
      top: 90,
      bottom: 0,
    },
    borderRadius: '5px',
    boxShadow: '0.5em 1em 1em rgba(64, 64, 70, 0.5)',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      margin: '0 auto !important',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto !important',
      width: '100%',
    },
  },
  genresContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: '10px 0 !important',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  genreImage: {
    filter: theme.palette.mode === 'dark' && 'invert(1)',
    marginRight: '10px',
  },
  Links: {
    textDecoration: 'none',
    //color: 'inherit',
    display: 'flex',
    alignItems: 'center',
    margin: '10px 5px',
  },
  companyLogo: {
    width: '100%',
    maxWidth: '7em',
    margin: '10px',
  },
  castImage: {
    width: '100%',
    maxWidth: '7em',
    outFit: 'cover',
    borderRadius: '5px',
    margin: '3px',
  },
  castGrid: {
    display: 'flex',
    maxWidth: '135px',
    alignItems: 'center',
    flexDirection: 'column',
  },
  btnIcon: {
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
    },
  },
  title: {
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  tagline: {
    fontStyle: 'italic',
    marginBottom: '10px',
  },
  overview: {
    marginBottom: '10px',
  },
}));
