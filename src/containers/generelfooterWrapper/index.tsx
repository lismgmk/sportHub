import { Box } from '@mui/material';
import { FooterMenuContainer } from 'components/footerMenuContainer';
import { LabelContainer } from 'components/labelContainer';
import { SocialIconFooterBox } from 'components/socialIconFooterBox';
import { sxGeneralFooterWrapper } from 'containers/generelfooterWrapper/style';
import React from 'react';

export const GeneralFooterWrapper = () => {
  return (
    <Box sx={sxGeneralFooterWrapper}>
      <FooterMenuContainer />
      <SocialIconFooterBox />
      <LabelContainer />
    </Box>
  );
};
