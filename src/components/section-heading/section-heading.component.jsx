import { Heading } from '@chakra-ui/react';

const SectionHeading = ({ children }) => {
  return (
    <Heading size="xl" mb="20px">
      {children}
    </Heading>
  );
};

export default SectionHeading;
