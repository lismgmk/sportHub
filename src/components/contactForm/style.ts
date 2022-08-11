import { Button, ButtonProps, TextField, TextFieldProps, BoxProps, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const BoxContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));
export const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
  fontSize: 12,
  fontWeight: 500,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.light,
  lineHeight: '14px',
  width: 201,
  height: 40,
  borderRadius: 100,
  textTransform: 'inherit',
  '&: hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light,
  },
}));
export const CustomTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  marginRight: '20px',
  width: 379,
  borderBottom: `2px solid ${theme.palette.primary.contrastText}`,
  color: theme.palette.primary.main,
  fontSize: 14,
  fontWeight: 300,
  '&::placeholder': {
    color: `${theme.palette.primary.light} !important`,
  },
  '& .MuiInputBase-root': {
    color: theme.palette.primary.light,
  },
}));
