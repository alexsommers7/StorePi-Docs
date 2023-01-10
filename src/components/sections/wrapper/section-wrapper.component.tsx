import { Box } from '@chakra-ui/react';

interface SectionWrapperProps {
  children: JSX.Element | JSX.Element[] | string;
  useBottomMargin?: boolean;
}

const SectionWrapper = ({ children, useBottomMargin = true }: SectionWrapperProps) => {
  return (
    <Box as="section" mb={useBottomMargin ? 24 : 0}>
      {children}
    </Box>
  );
};

export default SectionWrapper;
