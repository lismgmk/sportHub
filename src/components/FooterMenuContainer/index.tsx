import { Grid, Typography } from '@mui/material';
import { Logo } from 'elements/logo';
import { PS_MAIN_WHITE } from 'mainStyles/GlobalTheme';
import React from 'react';

export const FooterMenuContainer = () => {
  return (
    <Grid container>
      <Grid item>
        <Logo colorLetter={PS_MAIN_WHITE} />
      </Grid>
      <Grid item>
        <Typography variant={'body2'}>О проекте</Typography>
      </Grid>
      <Grid item>
        <Typography variant={'body2'}>Обратная связь</Typography>
      </Grid>
      <Grid item>
        <Typography></Typography>
      </Grid>
    </Grid>
  );
};
