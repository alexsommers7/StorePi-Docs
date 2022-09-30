import { Box } from '@chakra-ui/react';
import DocSectionHeading from '../../doc-section-heading/doc-section-heading.component';
import DocAnchor from '../../doc-anchor/doc-anchor.component';

const Carts = () => {
  return (
    <Box as="section" mb="60px" pt="40px">
      <DocSectionHeading text="Carts" />

      <DocAnchor text="Get All Carts" anchorId="get-carts" />
      <DocAnchor text="Get Cart" anchorId="get-cart" />
    </Box>
  );
};

export default Carts;
