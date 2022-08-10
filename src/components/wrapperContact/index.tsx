import { Box, Typography } from '@mui/material';
import React from 'react';
import { ContainerContentGrid } from './style';

export const WrapperContact = (props: { bg: string; children?: React.ReactNode; subtitle: string }) => {
  return (
    <Box>
      <Typography variant={'subtitle2'}>{props.subtitle}</Typography>
      <ContainerContentGrid bgColor={props.bg} item>
        {props.children}
      </ContainerContentGrid>
    </Box>
  );
};
