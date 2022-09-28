import { Text } from '@chakra-ui/react';

const DocHeading = ({ text }) => {
  return (
    <Text as="h2" fontSize="24px">
      {text}
    </Text>
  );
};

export default DocHeading;
