import { Heading } from '@chakra-ui/react';

const SectionHeading = ({ children }) => {
  return (
    <Heading size="xl" mb="1.25rem">
      {children}
    </Heading>
  );
};

export default SectionHeading;
