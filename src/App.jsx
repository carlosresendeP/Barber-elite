import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import theme from './styles/theme';
import Layout from './components/layout/Layout';
import HomePage from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <HomePage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
