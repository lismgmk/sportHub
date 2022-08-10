import { Box, Typography } from '@mui/material';
import { upPages } from 'constants/_data';
import { nanoid } from 'nanoid';
import React from 'react';
import { ContainerContent, ContainerUpMenu, UpperMenuButton } from './style';

export const HeaderContainer = () => {
  return (
    <Box sx={{ height: 520, position: 'relative' }}>
      <ContainerUpMenu>
        <Typography variant={'caption'}>
          sport
          <Typography variant={'caption'} sx={{ color: 'primary.light' }}>
            hub
          </Typography>
        </Typography>
        <Box>
          {upPages.map((page) => (
            <UpperMenuButton key={nanoid()} onClick={() => {}}>
              {page.name}
            </UpperMenuButton>
          ))}
        </Box>
      </ContainerUpMenu>
      <ContainerContent>
        <Box sx={{ width: 640 }}>
          <Typography variant={'subtitle1'} sx={{ color: 'primary.light', mb: 1.8 }}>
            #Экстрим
          </Typography>
          <Typography variant={'h1'} sx={{}}>
            Юрий Поклад: «Динамо» как бы начинает работать заново
          </Typography>
        </Box>
      </ContainerContent>
    </Box>
  );
};
