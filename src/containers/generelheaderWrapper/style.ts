import { Box, BoxProps, ButtonProps, Button } from '@mui/material';
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
  '&: before': {
    content: '""',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    backgroundColor: !props.bgColor && 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
  },
}));

export const UpperMenuButton = styled(Button)<ButtonProps>(({ theme }) => ({
  fontsize: 12,
  fontWeight: 400,
  color: theme.palette.primary.light,
  background: 'rgba(0, 0, 0, 0)',
  padding: '5px 25px',
  textTransform: 'uppercase',
}));

export const ContainerUpMenu = styled(Box)<BoxProps>(({ theme }) => ({
  paddingTop: 30,
  paddingBottom: 200,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const ContainerContent = styled(Box)<BoxProps>(({ theme }) => ({
  // paddingTop: 250,
  paddingBottom: 134,
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'center',
}));
