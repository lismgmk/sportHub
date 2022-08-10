import { Box } from '@mui/material';
import { upPages } from 'constants/_data';
import { Logo } from 'elements/logo';
import { PS_MAIN_RED } from 'mainStyles/GlobalTheme';
import { nanoid } from 'nanoid';
import React from 'react';
import { ContainerUpMenu, UpperMenuButton } from './style';

export const UpMenuContainer = () => {
  return (
    <ContainerUpMenu>
      <Logo colorLetter={PS_MAIN_RED} />
      {/*<Typography variant={'caption'}>*/}
      {/*  sport*/}
      {/*  <Typography variant={'caption'} sx={{ color: 'primary.light' }}>*/}
      {/*    hub*/}
      {/*  </Typography>*/}
      {/*</Typography>*/}
      <Box>
        {upPages.map((page) => (
          <UpperMenuButton key={nanoid()} onClick={() => {}}>
            {page.name}
          </UpperMenuButton>
        ))}
      </Box>
    </ContainerUpMenu>
  );
};
