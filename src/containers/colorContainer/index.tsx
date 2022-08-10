import React from 'react';
import { Box, Container } from '@mui/material';
import { CustomWrapperBox } from 'containers/headerContainer/style';

export const ColorContainer = (props: {
  children: React.ReactNode;
  color?: string;
  width: number;
  bgImage?: string;
}) => {
  return (
    <CustomWrapperBox bgImage={props.bgImage} bgColor={props.color}>
      <Container disableGutters sx={{ minWidth: props.width, position: 'relative', pl: 0, pr: 0 }}>
        {props.children}
      </Container>
    </CustomWrapperBox>
  );
};
