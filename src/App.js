import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";

import NavBar from './components/navbar';
import Genny from './components/Genny';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: 'rgba(163,0,255,0.73)',
    },
    secondary: {
      main: '#df07f1',
      contrastText: '#000000',
    },
    background: {
      paper: 'rgba(163,0,255,0.25)',
      default: '#000000',
    },
    error: {
      main: '#d60e00',
      contrastText: '#e2e2e2',
    },
    text: {
      secondary: '#f7f5f5',
      hint: '#65a4ff',
      primary: 'rgba(255,255,255,0.87)',
    },
  },
  typography: {
    fontFamily: 'monospace',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  }
});



function App() {



const [saveDate, setSaveDate] = useState();
const [loadDate, setLoadDate] = useState();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar saveDate={saveDate}></NavBar>
    <Genny display="flex" justifyContent="center" alignItems="center" setSaveDate={setSaveDate}/>
    </ThemeProvider>
  );
}

export default App;
