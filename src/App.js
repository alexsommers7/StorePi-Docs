// import React, { useContext } from 'react';
// import { DocsContext } from './contexts/docs.context';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from './theme';
import { Routes, Route, Navigate } from 'react-router-dom';
import { navHeight } from './utils/sizing/sizing.utils';
import Header from './routes/header/header.component';
import Docs from './routes/docs/docs.component';
import Footer from './routes/footer/footer.component';
import { DocsProvider } from './contexts/docs.context';

function App() {
  // const { activeAnchor } = useContext(DocsContext);

  return (
    <ChakraProvider theme={theme}>
      <DocsProvider>
        <Header />

        <Box as="main" pt={navHeight.string}>
          <Routes>
            <Route path="docs" index element={<Docs />} />
            <Route path="*" element={<Navigate to="docs" />} />
          </Routes>
        </Box>

        <Footer />
      </DocsProvider>
    </ChakraProvider>
  );
}

export default App;
