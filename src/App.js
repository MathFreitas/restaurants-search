import React from 'react'; 
import {ThemeProvider} from 'styled-components';
import Home from './pages/Home';
import theme from './theme';
import { Reset } from 'styled-reset'



function App() {
  return <ThemeProvider theme={theme}>
    <Reset />
    <Home />
  </ThemeProvider>
}

export default App;
