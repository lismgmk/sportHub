import { IconButton, IconButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const IconWrapper = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: '100px',
  backgroundColor: theme.palette.primary.light,
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));
