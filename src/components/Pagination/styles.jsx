import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  pageContainer: {
    '&.Mui-disabled': {
      color: theme.palette.primary.main,
      borderColor: `${theme.palette.primary.main}80`, //80 is the opacity
    },
  },
}));
