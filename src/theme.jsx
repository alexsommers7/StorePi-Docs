import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
  },
  colors: {
    brand: {
      100: '#64CEC9',
      200: '#38B2AC',
      300: '#2C8C87',
    },
  },
});

export default theme;
