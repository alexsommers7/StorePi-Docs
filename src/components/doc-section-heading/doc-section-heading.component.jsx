import { Heading } from '@chakra-ui/react';

const DocSectionHeading = ({ text, anchorId }) => {
  return (
    <Heading size="xl" mb="20px" id={anchorId || text.toLowerCase().split(' ').join('-')}>
      {text}
    </Heading>
  );
};

export default DocSectionHeading;
