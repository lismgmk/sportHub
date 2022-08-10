import { Typography } from '@mui/material';
import { BoxContainer, CustomButton, CustomTextField } from './style';

export const ContactForm = () => {
  return (
    <BoxContainer>
      <CustomTextField
        InputProps={{
          disableUnderline: true,
        }}
        variant="standard"
        placeholder={'Введите ваш email'}
      />
      <CustomButton>
        <Typography variant={'button'}>Подписться</Typography>
      </CustomButton>
    </BoxContainer>
  );
};
