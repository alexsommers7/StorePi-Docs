import { Heading } from '@chakra-ui/react';

interface SectionHeadingProps {
  children: JSX.Element | JSX.Element | string;
}

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <Heading size="xl" mb={2}>
      {children}
    </Heading>
  );
};

export default SectionHeading;
