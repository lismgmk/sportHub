import { Box, BoxProps, Button, ButtonProps, Container, ContainerProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ContainerLowMenu = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'sticky',
  background: theme.palette.primary.main,
  height: 60,
  [theme.breakpoints.down('lg')]: {
    overflowX: 'auto',
  },
}));

export const CustomContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: 'xl',
  width: 'fit-content',
  height: '100%',
}));

export const LowerMenuButton = styled(Button)<ButtonProps>(({ theme }) => ({
  width: 'fit-content',
  padding: '0 25px',
  [theme.breakpoints.down('md')]: {
    padding: '0 12.5px',
  },
  background: 'rgba(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  minHeight: 0,
  minWidth: 0,
  display: 'block',
}));
