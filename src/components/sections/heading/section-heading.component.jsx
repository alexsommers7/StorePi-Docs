import { Heading } from '@chakra-ui/react';

const SectionHeading = ({ children }) => {
  return (
    <Heading size="xl" mb={5}>
      {children}
    </Heading>
  );
};

export default SectionHeading;
