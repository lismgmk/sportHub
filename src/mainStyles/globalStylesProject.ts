import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      html: {
        '-webkit-font-smoothing': 'antialiasing',
        '-moz-osx-font-smoothing': 'grayscale',
        height: '100%',
        width: '100%',
        margin: 0,
        padding: 0,
      },
      '*, *::before, *::after': {
        boxSizing: 'inherit',
      },
      body: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        fontFamily: 'Roboto Flex, serif',
        fontWidth: 500,
        fontSize: 11,
        width: '100%',
        height: '100%',
        overflowX: 'hidden',
        overflowY: 'auto',
        margin: 0,
        padding: 0,
      },
      '#root': {
        height: '100%',
        width: '100%',
        margin: 0,
        padding: 0,
      },
      pre: {
        margin: 0,
        padding: 0,
        fontFamily: 'Roboto Flex, serif',
        fontWidth: 200,
        fontSize: 11,
      },
    },
  }),
);

const GlobalStylesProject = () => {
  useStyles();
  return null;
};

export default GlobalStylesProject;
