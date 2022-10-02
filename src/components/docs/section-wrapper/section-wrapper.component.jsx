import { Box, Divider } from '@chakra-ui/react';
import { BorderColor } from '../../../utils/color/colorModeValues.utils';

const SectionWrapper = ({ children }) => {
  return (
    <Box as="section" mb="60px" pt="40px">
      {children}
      <Divider borderColor={BorderColor} pt="40px" />
    </Box>
  );
};

export default SectionWrapper;
