import { Box, BoxProps, ButtonProps, Button, Card, CardProps, Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface CustomCardProps extends CardProps {
  img?: string;
}

export const CardContainer = styled(Card)<CardProps>(({ theme }) => ({
  maxWidth: 640,
  height: 580,
  borderRadius: '2px',
  backgroundColor: theme.palette.background.default,
}));
export const CardFullContainer = styled(Card, {
  shouldForwardProp: (props) => props !== 'img',
})<CustomCardProps>(({ theme, img }) => ({
  borderRadius: '2px',
  width: 640,
  height: 580,
  background: `linear-gradient(0deg, #202020 11.39%, rgba(57, 57, 57, 0.36) 119.3%), url(${img})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}));

export const DateContainer = styled(Typography)<TypographyProps>(({ theme }) => ({
  display: 'inline-block',
  paddingRight: '5px',
  borderRight: `1px solid ${theme.palette.primary.contrastText}`,
}));

export const BoxDateContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  paddingTop: '20px',
  paddingBottom: '10px',
}));
