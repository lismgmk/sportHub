import { Box } from '@mui/material';
import { FooterMenuContainer } from 'components/footerMenuContainer';
import { LabelContainer } from 'components/labelContainer';
import { SocialIconFooterBox } from 'components/socialIconFooterBox';
import React from 'react';

export const GeneralFooterWrapper = () => {
  return (
    <Box sx={{ height: 285 }}>
      <FooterMenuContainer />
      <SocialIconFooterBox />
      <LabelContainer />
    </Box>
  );
};
