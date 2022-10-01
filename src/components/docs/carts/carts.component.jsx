import { Box } from '@chakra-ui/react';
import SectionHeading from '../../section-heading/section-heading.component';
import AnchorHeading from '../../anchor-heading/anchor-heading.component';

const Carts = () => {
  return (
    <Box as="section" mb="60px" pt="40px">
      <SectionHeading>Carts</SectionHeading>

      <AnchorHeading anchorId="get-carts">Get All Carts</AnchorHeading>
      <AnchorHeading anchorId="get-cart">Get Cart</AnchorHeading>
    </Box>
  );
};

export default Carts;
