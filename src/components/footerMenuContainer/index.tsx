import { Grid, Typography } from '@mui/material';
import { Logo } from 'elements/logo';
import { PS_MAIN_WHITE } from 'mainStyles/GlobalTheme';
import React from 'react';
import { Advertising, EmailContact } from './style';

export const FooterMenuContainer = () => {
  return (
    <Grid rowSpacing={5} container sx={{ pt: { md: 4, sm: 3, xs: 3 } }}>
      <Grid justifyContent={'center'} container md={3} sm={12} xs={12} item>
        <Logo colorLetter={PS_MAIN_WHITE} />
      </Grid>
      <Grid justifyContent={'center'} container md={3} sm={12} xs={12} item>
        <Typography variant={'body2'}>О проекте</Typography>
      </Grid>
      <Grid justifyContent={'center'} container md={3} sm={12} xs={12} item>
        <Typography variant={'body2'}>Обратная связь</Typography>
      </Grid>
      <Grid alignItems={'center'} container md={3} sm={12} xs={12} item flexDirection={'column'}>
        <Advertising variant={'body2'}>Реклама:</Advertising>
        <EmailContact variant={'overline'}>ads@sporthub.news</EmailContact>
      </Grid>
    </Grid>
  );
};
