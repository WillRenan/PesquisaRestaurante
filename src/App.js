import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset'; //*reseta as configurações padrões dos componentes presentes nos navegadores.

import Home from './pages/Home';
import theme  from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Home />
    </ThemeProvider>
  );
}

export default App;