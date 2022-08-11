import { Box, BoxProps, Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ContainerLowMenu = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'sticky',
  height: 60,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const LowerMenuButton = styled(Button)<ButtonProps>(({ theme }) => ({
  fontsize: '14px',
  fontWeight: 500,
  color: theme.palette.primary.light,
  background: 'rgba(0, 0, 0, 0)',
  padding: '15px 25px',
  textTransform: 'capitalize',
}));
