import { Typography, Grid } from '@mui/material';
import { CustomButton, CustomTextField } from './style';

export const ContactForm = () => {
  return (
    <Grid
      justifyContent={'center'}
      alignItems={'center'}
      spacing={{ xl: 1, lg: 2, md: 2 }}
      container
      rowSpacing={{ xs: 1, sm: 3, md: 3 }}
    >
      <Grid display={'flex'} justifyContent={'center'} alignItems={'center'} item xl={8} lg={8} md={12} sm={12} xs={12}>
        <CustomTextField
          InputProps={{
            disableUnderline: true,
          }}
          variant="standard"
          placeholder={'Введите ваш email'}
        />
      </Grid>
      <Grid display={'flex'} justifyContent={'center'} alignItems={'center'} item xl={4} lg={4} md={12} sm={12} xs={12}>
        <CustomButton>
          <Typography variant={'button'}>Подписться</Typography>
        </CustomButton>
      </Grid>
    </Grid>
  );
};
