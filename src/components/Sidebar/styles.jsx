import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  imageLink: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10% 0',
  },
  image: {
    width: '70%',
  },
  link: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  genreImages: {
    filter: theme.palette.mode === 'dark' ? 'brightness(0) invert(1)' : 'none',
    height: '30px',
  },
  colBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

}));
