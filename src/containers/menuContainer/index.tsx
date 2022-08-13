import { Typography } from '@mui/material';
import { lowPages } from 'constants/_data';
import { nanoid } from 'nanoid';
import React from 'react';
import { ContainerLowMenu, CustomContainer, LowerMenuButton } from './style';

export const MenuContainer = () => {
  return (
    <ContainerLowMenu>
      <CustomContainer disableGutters>
        {lowPages.map((page) => (
          <LowerMenuButton key={nanoid()} onClick={() => {}}>
            <Typography variant={'overline'} sx={{ width: 'fix-content' }}>
              {page.name}
            </Typography>
          </LowerMenuButton>
        ))}
      </CustomContainer>
    </ContainerLowMenu>
  );
};
