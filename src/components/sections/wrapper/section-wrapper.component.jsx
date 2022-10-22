import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';

const SectionWrapper = ({ children, useBottomMargin = true }) => {
  useEffect(() => {
    console.log(`rendering section-wrapper component`);
  }, []);

  return (
    <Box as="section" mb={useBottomMargin && 32}>
      {children}
    </Box>
  );
};

export default SectionWrapper;
