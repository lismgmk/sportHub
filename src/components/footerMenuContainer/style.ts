import { Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Advertising = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  marginBottom: '10px',
  color: theme.palette.primary.light,
}));
export const EmailContact = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 300,
  lineHeight: '16px',
}));
