import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ContainerContent = styled(Box, {
  shouldForwardProp: (props) => props !== 'paddingTitle',
})<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'center',
}));

export const WidthContent = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up('xl')]: {
    width: 640,
  },
  [theme.breakpoints.only('lg')]: {
    width: 570,
  },
  [theme.breakpoints.only('md')]: {
    width: 570,
  },
  [theme.breakpoints.only('sm')]: {
    width: 465,
  },
  [theme.breakpoints.only('xs')]: {
    width: 250,
  },
}));

export const sxTag = { color: 'primary.light', mb: { xl: 2, md: 2, xs: 1 } };
export const sxArticle = { width: { xl: 400, md: 328, xs: 264 }, pt: { xl: 2, md: 2, xs: 1 } };
