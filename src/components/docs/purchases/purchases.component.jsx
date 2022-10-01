import { Box } from '@chakra-ui/react';
import SectionHeading from '../../section-heading/section-heading.component';
import AnchorHeading from '../../anchor-heading/anchor-heading.component';

const Purchases = () => {
  return (
    <Box as="section" mb="60px" pt="40px">
      <SectionHeading>Purchases</SectionHeading>

      <AnchorHeading anchorId="get-purchases">Get All Purchases</AnchorHeading>
      <AnchorHeading anchorId="get-purchase">Get Purchase</AnchorHeading>
    </Box>
  );
};

export default Purchases;
