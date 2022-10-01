import { Box, Code, UnorderedList, ListItem, Text } from '@chakra-ui/react';

import AnchorLink from '../../anchor-link/anchor-link.component';
import SectionHeading from '../../section-heading/section-heading.component';
import Anchor from '../../anchor-heading/anchor-heading.component';
import { apiOrigin } from '../../../utils/content/doc-content.utils';

const Products = () => {
  return (
    <Box as="section" mb="60px" pt="40px">
      <SectionHeading text="Products" />

      <Anchor text="Create New Product" anchorId="create-product" />

      <Anchor text="Get All Products" anchorId="get-products" />
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
          If filtering by a brand with multiple words, separate the words with a dash (-).
        </Text>
        <Text>
          If filtering by a category, you must pass in the id of the category, not the name. The
          category ids can be obtained via the{' '}
          <AnchorLink anchor="#get-categories" label="">
            categories
          </AnchorLink>{' '}
          endpoint
        </Text>
      </Box>

      <Anchor text="Get Product" anchorId="get-product" />
      <Anchor text="Get 10 Cheapest Products" anchorId="get-cheapest-products" />
      <Anchor text="Get 10 Highest Rated Products" anchorId="get-rated-products" />
      <Anchor text="Update Product" anchorId="update-product" />
      <Anchor text="Delete Product" anchorId="delete-product" />
    </Box>
  );
};

export default Products;
