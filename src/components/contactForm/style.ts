import { Button, ButtonProps, TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';

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
  [theme.breakpoints.only('md')]: {
    width: 201,
  },
  [theme.breakpoints.only('xs')]: {
    width: 180,
  },
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
