import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  sliderContainer: {
    width: '100%',
    height: '490px',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  sliderCard: {
    width: '100%',
    height: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  sliderImage: {
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: '0.5',
  },
  sliderContent: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    color: 'white',
  },
  sliderButton: {
    position: 'absolute',
    transform: 'translateY(-50%)',
    zIndex: '1',
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderColor: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText,
      borderColor: theme.palette.primary.contrastText,
      opacity: '0.95',
    },
  },
  sliderStepper: {
    position: 'absolute',
    bottom: '0',
    marginTop: '10px',
    backgroundColor: 'transparent',
  },
}));
