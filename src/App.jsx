import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MetaMaskProvider } from "metamask-react";
import { ThemeProvider } from '@mui/material/styles';

import HomePage from 'views/HomePage';

import PublicLayout from 'components/PublicLayout';

import theme from 'theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MetaMaskProvider>
        <PublicLayout>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage />} />
            </Routes>
          </BrowserRouter>
        </PublicLayout>
      </MetaMaskProvider>
    </ThemeProvider>
  );
}

export default App;
