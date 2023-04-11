import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  moviesContainer: {
    display: 'flex',
    justifyContent: 'start',
    flexWrap: 'wrap',
    overflow: 'auto',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
}));
