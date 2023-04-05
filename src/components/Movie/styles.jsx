import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  movie: {
    padding: '10px',
  },
  link: {
    alignItems: 'center',
    fontWeight: 'bolder',
    textDecoration: 'none',
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      padding: '0 80px',
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
  movieImage: {
    height: '300px',
    width: '200px',
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
