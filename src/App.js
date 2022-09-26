import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './routes/header/header.component';
import Docs from './routes/docs/docs.component';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />

      <Routes>
        <Route path="docs/*" index element={<Docs />} />
        <Route path="docs" index element={<Navigate to="introduction" />} />
        <Route path="*" index element={<Navigate to="docs/introduction" />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
