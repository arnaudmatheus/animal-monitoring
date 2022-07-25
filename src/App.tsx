import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './containers/LandingPage';
import { defaultTheme } from './themes';
import { ThemeProvider } from 'styled-components';

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
