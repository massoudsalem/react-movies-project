import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  movie: {
    padding: '0px !important',
    width: '100%',
  },
  link: {
    textDecoration: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  movieCard: {
    alignItems: 'center',
    fontWeight: 'bolder',
    textDecoration: 'none',
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  movieImage: {
    height: '300px',
    width: '200px',
    [theme.breakpoints.between('600', '670')]: {
      width: '160px',
      height: '240px',
    },
    borderRadius: '5px',
    margin: '5px 0',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.05)',
      transition: 'transform 0.5s ease',
    },
  },
  movieTitle: {
    color: theme.palette.text.primary,
    textOverflow: 'ellipsis',
    width: '230px',
    [theme.breakpoints.between('600', '670')]: {
      width: '180px',
    },
    [theme.breakpoints.up('md')]: {
      width: '240px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '200px',
    },
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    marginTop: '10px',
    marginBottom: 0,
    textAlign: 'center',
  },
  colBox: {
    display: 'flex',
    flexDirection: 'column',
  },
  movieYear: {
    color: theme.palette.text.primary,
    alignSelf: 'start',
  },
}));
