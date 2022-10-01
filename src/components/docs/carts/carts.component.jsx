import { Box } from '@chakra-ui/react';
import SectionHeading from '../../section-heading/section-heading.component';
import Anchor from '../../anchor-heading/anchor-heading.component';

const Carts = () => {
  return (
    <Box as="section" mb="60px" pt="40px">
      <SectionHeading text="Carts" />

      <Anchor text="Get All Carts" anchorId="get-carts" />
      <Anchor text="Get Cart" anchorId="get-cart" />
    </Box>
  );
};

export default Carts;
