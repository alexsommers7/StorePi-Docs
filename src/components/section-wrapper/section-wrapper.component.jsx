import { Box, Divider } from '@chakra-ui/react';
import { BorderColor } from '../../utils/color/colorModeValues.utils';

const SectionWrapper = ({ children, useBottomBorder = true }) => {
  return (
    <Box as="section" mb="60px" pt="40px">
      {children}
      <Divider borderColor={useBottomBorder ? BorderColor : 'transparent'} pt="40px" />
    </Box>
  );
};

export default SectionWrapper;
