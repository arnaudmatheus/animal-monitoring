/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import LandingPage from './containers/LandingPage';
import { defaultTheme } from './themes';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <LandingPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
