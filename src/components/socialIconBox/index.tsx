import { SvgIcon, Grid } from '@mui/material';
import { socialNetworks } from 'constants/_data';
import { nanoid } from 'nanoid';

export const SocialIconBox = () => {
  return (
    <Grid container justifyContent={'center'} spacing={6}>
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
