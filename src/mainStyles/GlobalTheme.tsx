import { createTheme } from '@mui/material';
import shadows, { Shadows } from '@mui/material/styles/shadows';

export const PS_MAIN_RED = '#F01B0D';
export const PS_MAIN_WHITE = '#FFFFFF';
export const PS_MAIN_GREY_LIGHT = '#828282';
export const PS_OPTIONAL_BLACK = '#000000';
export const PS_MAIN_GREY_DARK = 'rgba(0, 0, 0, 0.6)';
export const PS_MAIN_BLACK = '#1F1F1F';
export const PS_MAIN_BACKGROUND = '#E5E5E5';

declare module '@mui/material/styles' {
  // interface Theme {
  //   palette: IPalette;
  // }
  // interface PaletteOptions {
  //   search?: PaletteOptions['primary'];
  //   field?: PaletteOptions['primary'];
  //   line?: PaletteOptions['primary'];
  //   primarySecond?: PaletteOptions['primary'];
  //   optionalSecond?: PaletteOptions['primary'];
  // }
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

export const themeCustom = createTheme({
  shadows: shadows.map(() => 'none') as Shadows,
  typography: {
    fontFamily: `"Roboto Flex", sans-serif`,
    h1: {
      fontSize: 40,
      fontWeight: 700,
      color: PS_MAIN_WHITE,
    },
    h2: {
      fontSize: 36,
      fontWeight: 700,
      color: PS_MAIN_WHITE,
    },
    h3: {
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
    // h6: {
    //   fontSize: 18,
    //   fontWeight: 700,
    //   color: PS_MAIN_GREY,
    // },
    // subtitle2: {
    //   fontSize: 14,
    //   fontWeight: 500,
    //   color: PS_MAIN_BLUE,
    // },
    body1: {
      fontSize: 20,
      fontWeight: 300,
      color: PS_MAIN_GREY_LIGHT,
      lineHeight: '25px',
    },
    body2: {
      fontSize: 20,
      fontWeight: 300,
      color: PS_MAIN_GREY_DARK,
    },
    subtitle1: {
      fontSize: 12,
      fontWeight: 400,
      textTransform: 'uppercase',
    },
    caption: {
      fontSize: 20,
      fontWeight: 800,
      color: PS_MAIN_RED,
      fontFamily: `"Millimetre", sans-serif`,
      transform: 'matrix(0.98, 0, -0.19, 1, 0, 0)',
    },

    button: {
      fontSize: 12,
      fontWeight: 500,
      color: PS_MAIN_WHITE,
      background: PS_MAIN_RED,
    },
    // overline: {
    //   fontSize: 14,
    //   fontWeight: 500,
    //   color: PS_OPTIONAL_GREY,
    // },
  },
  palette: {
    primary: {
      main: PS_MAIN_RED,
      light: PS_MAIN_WHITE,
      dark: PS_OPTIONAL_BLACK,
      contrastText: PS_MAIN_GREY_LIGHT,
    },
    // secondary: {
    //   main: PS_OPTIONAL_LEAD,
    //   light: PS_OPTIONAL_GREY,
    //   dark: PS_OPTIONAL_GREEN,
    //   contrastText: PS_OPTIONAL_TEXT_2,
    // },
    background: {
      paper: PS_MAIN_RED,
      default: PS_MAIN_BACKGROUND,
    },
    text: {
      primary: PS_OPTIONAL_BLACK,
      secondary: PS_MAIN_WHITE,
    },
    // search: {
    //   main: PS_OPTIONAL_SEARCH,
    // },
    // field: {
    //   main: PS_OPTIONAL_FIELD,
    // },
    // line: {
    //   main: PS_OPTIONAL_LINE,
    // },
    // primarySecond: {
    //   main: PS_MAIN_GREY,
    //   light: PS_MAIN_WHITE,
    //   dark: PS_MAIN_BLACK,
    // },
    // optionalSecond: {
    //   main: PS_OPTIONAL_ORANGE,
    //   light: PS_OPTIONAL_RED,
    // },
  },
});
