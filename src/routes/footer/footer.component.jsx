import { Box } from '@chakra-ui/react';
import Attribution from '../../components/attribution/attribution.component';
import { docsSidebarWidth } from '../../utils/sizing/sizing.utils';

const Footer = () => {
  return (
    <Box pl={docsSidebarWidth}>
      <Attribution />
    </Box>
  );
};

export default Footer;
