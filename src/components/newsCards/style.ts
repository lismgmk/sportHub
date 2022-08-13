import {
  Box,
  BoxProps,
  Card,
  CardProps,
  Typography,
  TypographyProps,
  CardMedia,
  CardMediaProps,
  CardContent,
  CardContentProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

interface CustomCardProps extends CardProps {
  img?: string;
}

export const CardFullContainer = styled(Card, {
  shouldForwardProp: (props) => props !== 'img',
})<CustomCardProps>(({ theme, img }) => ({
  borderRadius: '2px',
  [theme.breakpoints.up('xl')]: {
    width: 640,
    height: 580,
  },
  [theme.breakpoints.between('md', 'xl')]: {
    width: 360,
    height: 469,
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: 369,
  },
  backgroundPosition: 'center center',
  background: img && `linear-gradient(0deg, #202020 11.39%, rgba(57, 57, 57, 0.36) 119.3%), url(${img})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const CardFullContent = styled(CardContent)<CardContentProps>(({ theme }) => ({
  borderRadius: '2px',
  padding: 20,
}));

export const CardImgContent = styled(CardContent)<CardContentProps>(({ theme }) => ({
  position: 'inherit',
  margin: 0,
  padding: 0,
  [theme.breakpoints.only('xs')]: {
    position: 'relative',
    top: '49%',
  },
}));

export const CardCustomMedia = styled(CardMedia)<CardMediaProps>(({ theme }) => ({
  component: 'img',
  alt: 'post',
  borderRadius: '2px',
  width: '100%',
  [theme.breakpoints.up('xl')]: {
    height: 368,
  },
  [theme.breakpoints.between('sm', 'xl')]: {
    height: 207,
  },
  [theme.breakpoints.only('xs')]: {
    height: 184,
    position: 'absolute',
  },
}));

export const DateContainer = styled(Typography)<TypographyProps>(({ theme }) => ({
  display: 'inline-block',
  paddingRight: '5px',
  borderRight: `1px solid ${theme.palette.primary.contrastText}`,
}));

export const BoxDateContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.up('md')]: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  paddingTop: 10,
  paddingBottom: 6,
}));

export const sxNewsCards = { mb: { xl: 7.5, lg: 7.5, md: 5, sm: 3.8, xs: 3.8 } };
