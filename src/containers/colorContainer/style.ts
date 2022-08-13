import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface CustomBoxProps extends BoxProps {
  bgColor?: string;
  bgImage?: string;
}

export const CustomWrapperBox = styled(Box, {
  shouldForwardProp: (props) => props !== 'bgImage' && props !== 'bgColor',
})<CustomBoxProps>((props) => ({
  position: 'relative',
  background:
    props.bgColor ||
    `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, rgba(0, 0, 0, 0) 46.88%, rgba(0, 0, 0, 0.4) 100%),  linear-gradient(180deg, rgba(0, 0, 0, 0.4) 6.25%, rgba(0, 0, 0, 0) 21.88%),  url(${props.bgImage})`,
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  '&: before': {
    content: '""',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    backgroundColor: !props.bgColor && 'rgba(0, 0, 0, 0.5)',
    backgroundPosition: 'center center',
    position: 'absolute',
  },
}));

export const sxResponsiveContainerWeight = {
  pl: { xs: 1.2, sm: 1.2, md: 1.2, lg: 1.2, xl: 1.2 },
  pr: { xs: 1.2, sm: 1.2, md: 1.2, lg: 1.2, xl: 1.2 },
  position: 'relative',
  overflow: 'hidden',
};
export const sxContents = { pb: { xl: 7.5, lg: 7.5, md: 5, sm: 5, xs: 6.2 } };
