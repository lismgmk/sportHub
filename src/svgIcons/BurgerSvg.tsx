import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const BurgerSvg = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox={'0 0 48 11'} fill={'none'}>
      <rect width="48" height="1.3" rx="0.65" fill="white" />
      <rect y="9.69995" width="48" height="1.3" rx="0.65" fill="white" />
    </SvgIcon>
  );
};
