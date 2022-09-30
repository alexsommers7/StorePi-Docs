import { Box } from '@chakra-ui/react';
import DocSectionHeading from '../../doc-section-heading/doc-section-heading.component';
import DocAnchor from '../../doc-anchor/doc-anchor.component';

const Products = () => {
  return (
    <Box as="section" mb="60px" pt="40px">
      <DocSectionHeading text="Products" />

      <DocAnchor text="Get All Products" anchorId="get-products" />
      <DocAnchor text="Get Product" anchorId="get-product" />
    </Box>
  );
};

export default Products;
