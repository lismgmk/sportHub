import React from 'react';
import { ContainerContentGrid } from './style';

export const WrapperContact = (props: { bg: string; children?: React.ReactNode }) => {
  return (
    <ContainerContentGrid bgColor={props.bg} item>
      {props.children}
    </ContainerContentGrid>
  );
};
