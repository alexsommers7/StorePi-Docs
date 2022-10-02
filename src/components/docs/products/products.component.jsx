import { Box, Code, UnorderedList, ListItem, Text } from '@chakra-ui/react';

import AnchorLink from '../../anchor-link/anchor-link.component';
import SectionHeading from '../../section-heading/section-heading.component';
import AnchorHeading from '../../anchor-heading/anchor-heading.component';
import { apiOrigin } from '../../../utils/content/doc-content.utils';

const Products = () => {
  return (
    <Box as="section" mb="60px" pt="40px">
      <SectionHeading>Products</SectionHeading>

      <AnchorHeading anchorId="create-product">Create New Product</AnchorHeading>

      <AnchorHeading anchorId="get-products">Get All Products</AnchorHeading>
      <Box mb="30px">
        <Code mb={3}>{apiOrigin}?limit=25</Code>
        <Text mb={0}>Use this endpoint to retrieve a list of all products</Text>
      </Box>

      <AnchorHeading anchorId="get-product">Get Product</AnchorHeading>
      <AnchorHeading anchorId="get-cheapest-products">Get 10 Cheapest Products</AnchorHeading>
      <AnchorHeading anchorId="get-rated-products">Get 10 Highest Rated Products</AnchorHeading>
      <AnchorHeading anchorId="update-product">Update Product</AnchorHeading>
      <AnchorHeading anchorId="delete-product">Delete Product</AnchorHeading>
    </Box>
  );
};

export default Products;
