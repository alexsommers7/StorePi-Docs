import { Box } from '@chakra-ui/react';
import SectionHeading from '../../section-heading/section-heading.component';
import Anchor from '../../anchor-heading/anchor-heading.component';

const Purchases = () => {
  return (
    <Box as="section" mb="60px" pt="40px">
      <SectionHeading text="Purchases" />

      <Anchor text="Get All Purchases" anchorId="get-purchases" />
      <Anchor text="Get Purchase" anchorId="get-purchase" />
    </Box>
  );
};

export default Purchases;
