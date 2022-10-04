import { Box, Code, Text } from '@chakra-ui/react';
import SectionWrapper from '../../section-wrapper/section-wrapper.component';
import SectionHeading from '../../section-heading/section-heading.component';
import AnchorHeading from '../../anchor-heading/anchor-heading.component';
import { apiOrigin } from '../../../utils/content/doc-content.utils';

const Products = () => {
  return (
    <SectionWrapper>
      <SectionHeading>Products</SectionHeading>

      <AnchorHeading anchorId="create-product">Create New Product</AnchorHeading>

      <AnchorHeading anchorId="get-products">Get All Products</AnchorHeading>
      <Box mb="1.875rem">
        <Code mb={3}>{apiOrigin}?limit=25</Code>
        <Text mb={0}>Use this endpoint to retrieve a list of all products</Text>
      </Box>

      <AnchorHeading anchorId="get-product">Get Product</AnchorHeading>
      <AnchorHeading anchorId="get-cheapest-products">Get 10 Cheapest Products</AnchorHeading>
      <AnchorHeading anchorId="get-rated-products">Get 10 Highest Rated Products</AnchorHeading>
      <AnchorHeading anchorId="update-product">Update Product</AnchorHeading>
      <AnchorHeading anchorId="delete-product">Delete Product</AnchorHeading>
    </SectionWrapper>
  );
};

export default Products;
