import { Box, useTheme, useMediaQuery } from '@mui/material';
import { upPages } from 'constants/_data';
import { Logo } from 'elements/logo';
import { MobileMenu } from 'elements/mobileMenu';
import { PS_MAIN_RED } from 'mainStyles/GlobalTheme';
import { nanoid } from 'nanoid';
import React from 'react';
import { ContainerUpMenu, UpperMenuButton } from './style';

export const UpMenuContainer = () => {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <ContainerUpMenu>
      <Logo colorLetter={PS_MAIN_RED} />
      {matchesMd ? (
        <MobileMenu />
      ) : (
        <Box>
          {upPages.map((page) => (
            <UpperMenuButton key={nanoid()} onClick={() => {}}>
              {page.name}
            </UpperMenuButton>
          ))}
        </Box>
      )}
    </ContainerUpMenu>
  );
};
