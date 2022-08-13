import { Grid, GridProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface CustomGridProps extends GridProps {
  bgColor: string;
}
export const ContainerContentGrid = styled(Grid, {
  shouldForwardProp: (props) => props !== 'bgColor',
})<CustomGridProps>(({ theme, bgColor }) => ({
  height: 180,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: bgColor,
}));

export const sxResponsiveContainerWeightContent = {
  pl: { xs: 0, sm: 1.2, md: 1.2, lg: 1.2, xl: 1.2 },
  pr: { xs: 0, sm: 1.2, md: 1.2, lg: 1.2, xl: 1.2 },
  position: 'relative',
  overflow: 'hidden',
};
