import { Grid, Box } from '@mui/material';
import React from 'react';
import { LogoLabel } from './style';

export const LabelContainer = () => {
  return (
    <Grid container spacing={2} sx={{ pb: 3 }} justifyContent={{ xs: 'center', sm: 'space-between' }}>
      <Grid item>
        <LogoLabel variant={'h4'}>© 2022 «Спортхаб»</LogoLabel>
      </Grid>
      <Grid item display={'flex'}>
        <Box component="img" sx={{ height: 15 }} src={'./mini_logo.png'} alt={'logo'} />
        <LogoLabel sx={{ pl: 2.2 }} variant={'h4'}>
          Разработка сайта — компания PRAS
        </LogoLabel>
      </Grid>
    </Grid>
  );
};
