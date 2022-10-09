import { theme as origTheme, extendTheme } from '@chakra-ui/react';

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
  components: {
    // overwite default color for Toast component (uses Alert under the hood)
    Alert: {
      variants: {
        solid: props => {
          const { colorScheme: c } = props;
          if (c !== 'green') {
            // use original definition for all color schemes except "green"
            return origTheme.components.Alert.variants.subtle(props);
          }
          return {
            container: {
              bg: 'brand.200',
            },
          };
        },
      },
    },
    Link: {
      baseStyle: {
        textDecoration: 'none',
      },
      variants: {
        text: {
          _hover: { color: 'brand.100' },
          color: 'brand.200',
        },
      },
    },
  },
});

export default theme;
