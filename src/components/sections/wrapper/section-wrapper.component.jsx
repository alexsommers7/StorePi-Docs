import { Box } from '@chakra-ui/react';

const SectionWrapper = ({ children, useBottomMargin = true }) => {
  return (
    <Box as="section" mb={useBottomMargin && 32}>
      {children}
    </Box>
  );
};

export default SectionWrapper;
