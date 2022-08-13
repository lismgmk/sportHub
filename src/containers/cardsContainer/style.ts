import { Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const LinkPosts = styled(Typography)<TypographyProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    paddingTop: 30,
    paddingBottom: 14,
  },
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 10,
  },
  paddingTop: 40,
  paddingBottom: 24,
}));
