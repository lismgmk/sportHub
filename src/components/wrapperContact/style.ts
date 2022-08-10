import { Grid, GridProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface CustomGridProps extends GridProps {
  bgColor: string;
}
export const ContainerContentGrid = styled(Grid, {
  shouldForwardProp: (props) => props !== 'bgColor',
})<CustomGridProps>((props) => ({
  width: 680,
  height: 180,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: props.bgColor,
}));
