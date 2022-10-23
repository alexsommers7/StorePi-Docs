import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from './theme';
import { Routes, Route, Navigate } from 'react-router-dom';
import { navHeight } from './utils/sizing/sizing.utils';
import Header from './routes/header/header.component';
import Docs from './routes/docs/docs.component';
import Footer from './routes/footer/footer.component';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />

      <Box as="main" pt={navHeight.string}>
        <Routes>
          <Route path="docs" index element={<Docs />} />
          <Route path="*" element={<Navigate to="docs" />} />
        </Routes>
      </Box>

      <Footer />
    </ChakraProvider>
  );
}

export default App;
