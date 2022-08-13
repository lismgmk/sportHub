import { Card, CardProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CardContainer = styled(Card)<CardProps>(({ theme }) => ({
  [theme.breakpoints.only('sm')]: {
    maxWidth: 290,
  },
  maxWidth: 300,
  height: 289,
  padding: '20px 0px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.background.default,
}));
export const sxAvatarImage = { width: 100, height: 100, position: 'relative' };
export const sxAvatarSvgIcon = {
  width: 48,
  height: 48,
  color: 'primary.light',
  position: 'absolute',
  zIndex: 3,
  left: -31,
  bottom: 55,
};
