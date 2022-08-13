import { Grid, Typography, Box, SvgIcon } from '@mui/material';
import { sxNewsCards } from 'components/newsCards/style';
import { avatars } from 'constants/_data';
import { nanoid } from 'nanoid';
import { QuoteSvg } from 'svgIcons/QuoteSvg';
import { CardContainer, sxAvatarSvgIcon, sxAvatarImage } from './style';

export const AvatarCards = () => {
  return (
    <Grid
      container
      justifyContent={{ xs: 'center', sm: 'center', md: 'space-between' }}
      alignItems="baseline"
      sx={sxNewsCards}
    >
      {avatars.map((avatar) => {
        return (
          <Grid key={nanoid()} item>
            <CardContainer>
              <Box sx={{ position: 'relative' }}>
                <SvgIcon sx={sxAvatarSvgIcon} component={QuoteSvg} />
                <Box component="img" sx={sxAvatarImage} src={avatar.pathImg} alt={avatar.pathImg} />
              </Box>
              <Typography sx={{ mt: 1.6 }} variant={'h6'}>
                {avatar.name}
              </Typography>
              <Typography sx={{ mt: 0.8 }} variant={'h5'}>
                {avatar.occupation}
              </Typography>
              <Typography sx={{ mt: 2.2, textAlign: 'center' }} variant={'body1'}>
                {avatar.conversation}
              </Typography>
            </CardContainer>
          </Grid>
        );
      })}
    </Grid>
  );
};
