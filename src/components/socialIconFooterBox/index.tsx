import { SvgIcon, Grid } from '@mui/material';
import { socialNetworks } from 'constants/_data';
import { nanoid } from 'nanoid';
import { IconWrapper } from './style';

export const SocialIconFooterBox = () => {
  return (
    <Grid container justifyContent={'center'} columnSpacing={{ xs: 1.5, sm: 1.5, md: 3 }}>
      {socialNetworks.map((icon) => {
        return (
          <Grid key={nanoid()} item>
            <IconWrapper>
              <SvgIcon
                sx={{
                  color: 'primary.main',
                }}
                component={icon.svgElem}
              />
            </IconWrapper>
          </Grid>
        );
      })}
    </Grid>
  );
};
