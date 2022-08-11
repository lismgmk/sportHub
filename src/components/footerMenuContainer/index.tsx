import { Grid, Typography } from '@mui/material';
import { Logo } from 'elements/logo';
import { PS_MAIN_WHITE } from 'mainStyles/GlobalTheme';
import React from 'react';
import { Advertising, EmailContact } from './style';

export const FooterMenuContainer = () => {
  return (
    <Grid container sx={{ pt: 4, pb: 8.2 }}>
      <Grid xs={3} item>
        <Logo colorLetter={PS_MAIN_WHITE} />
      </Grid>
      <Grid xs={3} item>
        <Typography variant={'body2'}>О проекте</Typography>
      </Grid>
      <Grid xs={3} item>
        <Typography variant={'body2'}>Обратная связь</Typography>
      </Grid>
      <Grid xs={3} item flexDirection={'column'}>
        <Advertising variant={'body2'}>Реклама:</Advertising>
        <EmailContact variant={'overline'}>ads@sporthub.news</EmailContact>
      </Grid>
    </Grid>
  );
};
