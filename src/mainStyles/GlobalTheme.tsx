import { createTheme } from '@mui/material';
import shadows, { Shadows } from '@mui/material/styles/shadows';

export const PS_MAIN_RED = '#F01B0D';
export const PS_MAIN_WHITE = '#FFFFFF';
export const PS_MAIN_GREY_LIGHT = '#828282';
export const PS_OPTIONAL_BLACK = '#000000';
export const PS_MAIN_BLACK = '#1F1F1F';
export const PS_MAIN_BACKGROUND = '#E5E5E5';

declare module '@mui/material/styles' {
  interface IPalette {
    primary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    secondary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    background: {
      paper: string;
      default: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
    search: {
      main: string;
    };
    field: {
      main: string;
    };
    line: {
      main: string;
    };
    primarySecond: {
      main: string;
      light: string;
      dark: string;
    };
    optionalSecond: {
      main: string;
      light: string;
    };
  }

  interface ThemeOptions {
    primary?: {
      main?: string;
      light?: string;
      dark?: string;
      contrastText?: string;
    };
    secondary?: {
      main?: string;
      light?: string;
      dark?: string;
      contrastText?: string;
    };
    background?: {
      paper?: string;
      default?: string;
    };
    text?: {
      primary?: string;
      secondary?: string;
    };
    search?: {
      main?: string;
    };
    field?: {
      main?: string;
    };
    line?: {
      main?: string;
    };
    primarySecond?: {
      main?: string;
      light?: string;
      dark?: string;
    };
    optionalSecond?: {
      main?: string;
      light?: string;
    };
  }
}
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}
const customBreakpoints = {
  xs: 0,
  sm: 500,
  md: 768,
  lg: 1100,
  xl: 1400,
};

const breakpoints = createTheme({
  breakpoints: {
    values: customBreakpoints,
  },
});

export const themeCustom = createTheme({
  shadows: shadows.map(() => 'none') as Shadows,
  breakpoints: {
    values: customBreakpoints,
  },
  typography: {
    fontFamily: `"Roboto Flex", sans-serif`,
    h1: {
      [breakpoints.breakpoints.up('sm')]: {
        fontSize: 40,
        lineHeight: '45px',
      },
      fontSize: 20,
      fontWeight: 700,
      color: PS_MAIN_WHITE,
      lineHeight: '23px',
    },
    h2: {
      [breakpoints.breakpoints.up('md')]: {
        fontSize: 36,
        lineHeight: '45px',
      },
      fontSize: 20,
      fontWeight: 700,
      color: PS_MAIN_WHITE,
      lineHeight: '23px',
    },
    h3: {
      [breakpoints.breakpoints.only('xs')]: {
        fontSize: 16,
        lineHeight: '20px',
      },
      fontSize: 26,
      fontWeight: 700,
      color: PS_MAIN_BLACK,
      lineHeight: '32px',
    },
    h4: {
      fontSize: 12,
      fontWeight: 300,
      color: PS_MAIN_GREY_LIGHT,
    },
    h5: {
      fontSize: 11,
      fontWeight: 400,
      color: PS_OPTIONAL_BLACK,
      textTransform: 'uppercase',
    },
    h6: {
      fontSize: 18,
      fontWeight: 700,
      color: PS_OPTIONAL_BLACK,
    },
    subtitle2: {
      fontSize: 18,
      fontWeight: 400,
      color: PS_OPTIONAL_BLACK,
      textTransform: 'uppercase',
    },
    body1: {
      [breakpoints.breakpoints.only('xs')]: {
        fontSize: 14,
        lineHeight: '18px',
      },
      [breakpoints.breakpoints.between('sm', 'xl')]: {
        fontSize: 16,
        lineHeight: '20px',
      },
      [breakpoints.breakpoints.up('xl')]: {
        fontSize: 20,
        lineHeight: '25px',
      },
      fontWeight: 300,
      color: PS_MAIN_GREY_LIGHT,
    },
    body2: {
      fontSize: 16,
      fontWeight: 500,
      color: PS_MAIN_WHITE,
      textTransform: 'uppercase',
    },
    subtitle1: {
      fontSize: 12,
      fontWeight: 400,
      textTransform: 'uppercase',
      lineHeight: '14px',
    },
    caption: {
      fontSize: 20,
      fontWeight: 800,
      color: PS_MAIN_RED,
      fontFamily: `"Millimetre", sans-serif`,
      transform: 'matrix(0.98, 0, -0.19, 1, 0, 0)',
      lineHeight: '20px',
    },
    overline: {
      fontSize: 14,
      fontWeight: 500,
      color: PS_MAIN_WHITE,
      textTransform: 'capitalize',
    },
  },
  palette: {
    primary: {
      main: PS_MAIN_RED,
      light: PS_MAIN_WHITE,
      dark: PS_OPTIONAL_BLACK,
      contrastText: PS_MAIN_GREY_LIGHT,
    },
    background: {
      paper: PS_MAIN_RED,
      default: PS_MAIN_BACKGROUND,
    },
    text: {
      primary: PS_OPTIONAL_BLACK,
      secondary: PS_MAIN_WHITE,
    },
  },
});
