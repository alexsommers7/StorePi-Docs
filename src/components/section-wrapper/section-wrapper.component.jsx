import { Box, Divider } from '@chakra-ui/react';
import { BorderColor } from '../../utils/color/colorModeValues.utils';

const SectionWrapper = ({ children, useBottomBorder = true, useBottomMargin = true }) => {
  return (
    <Box as="section" mb={useBottomMargin && '60px'}>
      {children}
      <Divider borderColor={useBottomBorder ? BorderColor : 'transparent'} pt="50px" />
    </Box>
  );
};

export default SectionWrapper;
