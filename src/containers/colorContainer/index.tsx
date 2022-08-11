import { Container } from '@mui/material';
import React from 'react';
import { CustomWrapperBox } from './style';

export const ColorContainer = (props: { children: React.ReactNode; color?: string; bgImage?: string }) => {
  return (
    <CustomWrapperBox bgImage={props.bgImage} bgColor={props.color}>
      {/*<Container disableGutters sx={{ minWidth: props.width, position: 'relative', pl: 0, pr: 0 }}>*/}
      <Container disableGutters sx={{ width: { lg: 1320, md: 748, sm: 320 }, position: 'relative', pl: 0, pr: 0 }}>
        {props.children}
      </Container>
    </CustomWrapperBox>
  );
};
