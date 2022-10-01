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
        <Code mb="12px">{apiOrigin}?limit=25</Code>
        <Text>
          Use this endpoint to retrieve a list of all products. The following parameters are
          duplicatable:
        </Text>
        <UnorderedList pl="20px" pt="10px" mb="10px">
          <ListItem>
            <Code>reviews_average</Code>
          </ListItem>
          <ListItem>
            <Code>reviews_quantity</Code>
          </ListItem>
          <ListItem>
            <Code>regular_price</Code>
          </ListItem>
          <ListItem>
            <Code>sale_price</Code>
          </ListItem>
          <ListItem>
            <Code>brand</Code>
          </ListItem>
          <ListItem>
            <Code>category</Code>
          </ListItem>
        </UnorderedList>

        <Text mb="12px">
          If filtering by a brand with multiple words, separate the words with a <Code>-</Code>
        </Text>
        <Text>
          If filtering by a category, you must pass in the ID of the category, not the name. The
          category IDs can be obtained via the{' '}
          <AnchorLink anchor="get-categories">categories</AnchorLink> endpoint
        </Text>
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
