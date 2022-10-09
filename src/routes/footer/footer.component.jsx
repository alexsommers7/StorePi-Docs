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
        <Text fontSize={12}>
          <ExternalLink href="https://documenter.getpostman.com/view/12907395/UyxjF694">
            Run in Postman
          </ExternalLink>
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
