import { SvgIcon, Grid } from '@mui/material';
import { socialNetworks } from 'constants/_data';
import { nanoid } from 'nanoid';

export const SocialIconBox = () => {
  return (
    <Grid container justifyContent={'center'} spacing={{ xl: 6.2, lg: 6.2, md: 4.5, sm: 4.5, xs: 4.5 }}>
      {socialNetworks.map((icon) => {
        return (
          <Grid key={nanoid()} item>
            <SvgIcon
              sx={{
                color: 'primary.light',
              }}
              component={icon.svgElem}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
