import React, { useState } from 'react';
import { Alert, Snackbar } from '@mui/material';

const Toast = ({ msg, type = 'success' }) => {
  const [openAlert, setAlertOpen] = useState(true);

  return (
    <Snackbar
      open={openAlert}
      autoHideDuration={6000}
      onClose={() => {
        setAlertOpen(false);
      }}
    >
      <Alert
        onClose={() => {
          setAlertOpen(false);
        }}
        severity={type}
        sx={{ width: '100%' }}
      >
        {msg}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
