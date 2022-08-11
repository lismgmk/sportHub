import { Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const LogoLabel = styled(Typography)<TypographyProps>(({ theme }) => ({
  lineHeight: '16px',
  fontWeight: 300,
  color: theme.palette.primary.light,
}));
