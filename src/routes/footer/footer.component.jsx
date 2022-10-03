import { Box, Text } from '@chakra-ui/react';
import { docsSidebarWidth } from '../../utils/sizing/sizing.utils';
import ExternalLink from '../../components/external-link/external-link.component';

const Footer = () => {
  return (
    <Box pl={docsSidebarWidth.string}>
      <Box pt="20px" textAlign="center">
        <Text>
          Created by <ExternalLink href="https://AlexSommers.com">Alex Sommers</ExternalLink>
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
