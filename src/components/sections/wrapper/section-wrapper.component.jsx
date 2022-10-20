import { Box } from '@chakra-ui/react';

const SectionWrapper = ({ children, useBottomMargin = true }) => {
  return (
    <Box as="section" mb={useBottomMargin && 20}>
      {children}
    </Box>
  );
};

export default SectionWrapper;
