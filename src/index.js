import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { CitiesContextProvider, MapContextProvider } from '@src/contexts';
import { HomePage } from '@src/pages';
import { GlobalStyle, theme } from '@src/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MapContextProvider>
        <CitiesContextProvider>
          <HomePage />
        </CitiesContextProvider>
      </MapContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
