import { Grid, Box } from '@mui/material';
import React from 'react';
import { LogoLabel } from './style';

export const LabelContainer = () => {
  return (
    <Grid container sx={{ pt: 5 }} justifyContent={'space-between'}>
      <Grid item>
        <LogoLabel variant={'h4'}>© 2022 «Спортхаб»</LogoLabel>
      </Grid>
      <Grid item sx={{ display: 'flex' }}>
        <Box component="img" sx={{ height: 15 }} src={'/mini_logo.png'} alt={'logo'} />
        <LogoLabel sx={{ pl: 2.2 }} variant={'h4'}>
          Разработка сайта — компания PRAS
        </LogoLabel>
      </Grid>
    </Grid>
  );
};
