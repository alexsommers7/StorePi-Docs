import React, { useContext } from 'react';
import { DocsContext } from './contexts/docs.context';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from './theme';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './routes/header/header.component';
import Docs from './routes/docs/docs.component';

function App() {
  const { activeAnchor } = useContext(DocsContext);

  return (
    <ChakraProvider theme={theme}>
      <Header />

      <Box as="main" pt="57px">
        <Routes>
          <Route path="docs" index element={<Docs />} />
          <Route path="*" element={<Navigate to="docs" />} />
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
