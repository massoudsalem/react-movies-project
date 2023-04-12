import React from 'react';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Box, Button, ButtonGroup } from '@mui/material';

import useStyles from './styles';

const Pagination = ({ page, setPage, totalPages }) => {
  const classes = useStyles();

  return (
    <Box>
      <ButtonGroup size="small" color="primary" aria-label="outlined primary button group">
        <Button onClick={() => setPage((prev) => prev - 1)} disabled={page === 1} startIcon={<ArrowBack />} />
        <Button disabled className={classes.pageContainer}>{page}</Button>
        <Button onClick={() => setPage((prev) => prev + 1)} disabled={page === totalPages} endIcon={<ArrowForward />} />
      </ButtonGroup>
    </Box>
  );
};

export default Pagination;
