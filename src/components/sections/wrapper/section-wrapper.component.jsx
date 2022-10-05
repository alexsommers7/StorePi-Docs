import { Box, Divider } from '@chakra-ui/react';
import { BorderColor } from '../../../utils/color/colorModeValues.utils';

const SectionWrapper = ({ children, useBottomBorder = true, useBottomMargin = true }) => {
  return (
    <Box as="section" mb={useBottomMargin && '3.75rem'}>
      {children}
      <Divider borderColor={useBottomBorder ? BorderColor : 'transparent'} pt="3.75rem" />
    </Box>
  );
};

export default SectionWrapper;