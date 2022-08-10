import { Card, CardProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CardContainer = styled(Card)<CardProps>(({ theme }) => ({
  maxWidth: 300,
  height: 289,
  padding: '20px 0px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.background.default,
}));
