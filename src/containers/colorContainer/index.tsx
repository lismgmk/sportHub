import { Container } from '@mui/material';
import React from 'react';
import { CustomWrapperBox, sxResponsiveContainerWeight } from './style';

export const ColorContainer = (props: { children: React.ReactNode; color?: string; bgImage?: string }) => {
  return (
    <CustomWrapperBox bgImage={props.bgImage} bgColor={props.color}>
      <Container maxWidth={'xl'} disableGutters sx={sxResponsiveContainerWeight}>
        {props.children}
      </Container>
    </CustomWrapperBox>
  );
};
