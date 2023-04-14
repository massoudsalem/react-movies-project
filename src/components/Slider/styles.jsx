import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  '@keyframes in': {
    '0%': {
      opacity: 0,
      transform: 'translateX(-200%)',
    },
    '50%': {
      opacity: 0.5,
      transform: 'translateX(0)',
    },
    '75%': {
      opacity: 0.5,
      transform: 'translateX(0)',
    },
    '100%': {
      opacity: 0,
      transform: 'translateX(200%)',
    },
  },
  '@keyframes glow': {
    '0%': {
      opacity: 0,
    },
    '50%': {
      opacity: 1,
    },
    '75%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
    },
  },
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
    animation: `$in 3000ms ${theme.transitions.easing.easeInOut}`,
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: '0.5',
  },
  sliderContent: {
    animation: `$glow 3000ms ${theme.transitions.easing.easeInOut}`,
    position: 'absolute',
    bottom: '20px',
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
    '& .MuiMobileStepper-dot': {
      width: '15px',
      height: '15px',
      backgroundColor: theme.palette.primary.contrastText,
      opacity: '0.7',
    },
    '& .MuiMobileStepper-dotActive': {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));
