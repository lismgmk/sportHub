import { Box, BoxProps, ButtonProps, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const UpperMenuButton = styled(Button)<ButtonProps>(({ theme }) => ({
  fontsize: 12,
  fontWeight: 400,
  color: theme.palette.primary.light,
  background: 'rgba(0, 0, 0, 0)',
  padding: '5px 25px',
  textTransform: 'uppercase',
}));

export const ContainerUpMenu = styled(Box)<BoxProps>(({ theme }) => ({
  paddingTop: 30,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));
