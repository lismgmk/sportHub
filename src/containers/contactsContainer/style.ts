import { Grid, GridProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ContainerCardsMain = styled(Grid)<GridProps>(({ theme }) => ({
  paddingTop: 20,
  paddingBottom: 60,
}));
