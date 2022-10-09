import React, { useRef, useEffect } from 'react';
// import { DocsContext } from './contexts/docs.context';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from './theme';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { navHeight } from './utils/sizing/sizing.utils';
import { yOffset } from './utils/anchor/anchor.utils';
import Header from './routes/header/header.component';
import Docs from './routes/docs/docs.component';
import Footer from './routes/footer/footer.component';
import { DocsProvider } from './contexts/docs.context';

function App() {
  // const { activeAnchor } = useContext(DocsContext);
  const scrolledRef = useRef(false);
  const { hash } = useLocation();

  // handle anchor link existing on render
  useEffect(() => {
    if (hash && !scrolledRef.current) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });

        scrolledRef.current = true;
      }
    }
  });

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
