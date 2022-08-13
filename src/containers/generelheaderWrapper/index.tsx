import { Box, Typography } from '@mui/material';
import React from 'react';
import { BreakPointsProps } from 'types';
import { ContainerContent, sxTag, sxArticle, WidthContent } from './style';

export const GeneralHeaderWrapper = (props: {
  height: BreakPointsProps;
  title: string;
  tag?: string;
  article?: string;
  children?: React.ReactNode;
  paddingTitle: BreakPointsProps;
  variant: 'h1' | 'h2';
}) => {
  return (
    <Box sx={{ height: props.height, position: 'relative' }}>
      {props.children}
      <ContainerContent sx={{ paddingTop: props.paddingTitle }}>
        <WidthContent>
          <Typography variant={'subtitle1'} sx={sxTag}>
            {props.tag}
          </Typography>
          <Typography variant={props.variant}>{props.title}</Typography>
          <Typography variant={'body1'} sx={sxArticle}>
            {props.article}
          </Typography>
        </WidthContent>
      </ContainerContent>
    </Box>
  );
};
