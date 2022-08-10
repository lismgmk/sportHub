import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStylesProject from 'mainStyles/globalStylesProject';
import { AppPage } from 'pages';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { themeCustom } from 'mainStyles/GlobalTheme';

export const App = () => {
  return (
    <ThemeProvider theme={themeCustom}>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <GlobalStylesProject />
          <AppPage />
        </BrowserRouter>
      </StyledEngineProvider>
    </ThemeProvider>
  );
};
