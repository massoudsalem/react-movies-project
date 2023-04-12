import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  pageContainer: {
    '&.Mui-disabled': {
      color: theme.palette.mode !== 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      borderColor: theme.palette.mode !== 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    },
  },
}));
