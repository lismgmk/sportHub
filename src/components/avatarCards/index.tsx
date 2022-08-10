import { Grid, Typography, Box, SvgIcon } from '@mui/material';
import { avatars } from 'constants/_data';
import { QuoteSvg } from 'svgIcons/QuoteSvg';
import { CardContainer } from './style';

export const AvatarCards = () => {
  return (
    <Grid container justifyContent="space-between" alignItems="baseline">
      {avatars.map((avatar) => {
        return (
          <Grid item sx={{ mb: 7.5 }}>
            <CardContainer>
              <Box sx={{ position: 'relative' }}>
                <SvgIcon
                  sx={{
                    width: 48,
                    height: 48,
                    color: 'primary.light',
                    position: 'absolute',
                    zIndex: 3,
                    left: -31,
                    bottom: 55,
                  }}
                  component={QuoteSvg}
                />
                <Box
                  component="img"
                  sx={{ width: 100, height: 100, position: 'relative ' }}
                  src={avatar.pathImg}
                  alt={avatar.pathImg}
                />
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
