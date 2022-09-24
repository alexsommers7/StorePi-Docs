import React from 'react';
import { ChakraProvider, Box, Grid, Text } from '@chakra-ui/react';
import theme from './theme';

import Header from './components/header/header.component';
import Sidebar from './components/sidebar/sidebar.component';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Header />

        <Grid minH="100vh" templateColumns="250px 1fr" maxWidth="1400px" m="auto">
          <Sidebar />

          <Box as="main" p="32px" fontSize="md">
            <Text>Main Content</Text>
          </Box>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
