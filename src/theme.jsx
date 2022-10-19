import { theme as origTheme, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
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
          _hover: { textDecoration: 'none', color: 'brand.100' },
          color: 'brand.200',
        },
      },
    },
    Badge: {
      baseStyle: {
        fontSize: 'md',
        lineHeight: '1.2',
        paddingLeft: '0',
      },
      variants: {
        GET: {
          color: 'rgb(12, 187, 82)',
        },
        POST: {
          color: 'rgb(255, 180, 0)',
        },
        PATCH: {
          color: 'rgb(151, 151, 151)',
        },
        DELETE: {
          color: 'rgb(255, 59, 46)',
        },
      },
    },
    Code: {
      baseStyle: {
        tabSize: '2',
      },
    },
  },
});

export default theme;
