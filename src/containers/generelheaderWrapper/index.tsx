import { Box, Typography } from '@mui/material';
import React from 'react';
import { BreakPointsProps } from 'types';
import { ContainerContent } from './style';

export const GeneralHeaderWrapper = (props: {
  height: BreakPointsProps;
  title: string;
  tag?: string;
  article?: string;
  children?: React.ReactNode;
  paddingTitle?: BreakPointsProps;
}) => {
  return (
    <Box sx={{ height: props.height, position: 'relative' }}>
      {props.children}
      <ContainerContent sx={{ pt: props.paddingTitle }}>
        {/*<Box sx={{ width: 640 }}>*/}
        <Box sx={{ width: { lg: 640, md: 550, sm: 290 } }}>
          <Typography variant={'subtitle1'} sx={{ color: 'primary.light', mb: 1.8 }}>
            {props.tag}
          </Typography>
          <Typography variant={'h1'}>{props.title}</Typography>
          {/*<Typography variant={'body1'} sx={{ width: 400, pt: 2 }}>*/}
          <Typography variant={'body1'} sx={{ width: { lg: 400, md: 328, sm: 264 }, pt: 2 }}>
            {props.article}
          </Typography>
        </Box>
      </ContainerContent>
    </Box>
  );
};
