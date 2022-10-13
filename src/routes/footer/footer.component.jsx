import { Box, Text } from '@chakra-ui/react';
import { docsSidebarWidth } from '../../utils/sizing/sizing.utils';
import ExternalLink from '../../components/links/external/external-link.component';

const Footer = () => {
  return (
    <Box pl={['0', '0', docsSidebarWidth.string]}>
      <Box pt={5} pb={5} textAlign="center">
        <Text>
          Created by <ExternalLink href="https://AlexSommers.com">Alex Sommers</ExternalLink>
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
