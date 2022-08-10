import { Box, Typography } from '@mui/material';
import React from 'react';

export const Logo = (props: { colorLetter: string }) => {
  return (
    <Box>
      <Typography variant={'caption'} sx={{ color: props.colorLetter }}>
        sport
        <Typography variant={'caption'} sx={{ color: 'primary.light' }}>
          hub
        </Typography>
      </Typography>
    </Box>
  );
};
