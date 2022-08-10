import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const QuoteSvg = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox={'0 0 48 48'} fill={'none'}>
      <rect width="48" height="48" rx="24" fill="#F01B0D" />
      <path d="M21.2503 17.5V25.7498H13.0005V17.5L21.2503 17.5Z" fill="white" />
      <path d="M34.9999 17.5V25.7499H26.7501V17.5L34.9999 17.5Z" fill="white" />
      <path
        d="M21.2503 25.7498V17.5L13.0005 17.5V25.7498H21.2503ZM21.2503 25.7498C21.2503 27.8123 20.4253 31.9372 17.1254 31.9372M34.9999 25.7499V17.5L26.7501 17.5V25.7499H34.9999ZM34.9999 25.7499C34.9999 27.8123 34.175 31.9372 30.875 31.9372"
        stroke="white"
        stroke-width="2"
      />
    </SvgIcon>
  );
};
