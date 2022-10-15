import { Text } from '@chakra-ui/react';
import Endpoint from '../../endpoint/endpoint.component';
import SectionWrapper from '../../sections/wrapper/section-wrapper.component';
import SectionHeading from '../../sections/heading/section-heading.component';
import AnchorHeading from '../../links/anchor/anchor-heading.component';
import {
  getAllProductsResponse,
  getProductResponse,
  createNewProductResponse,
} from '../../../utils/content/doc-sample-responses.utils';
import { createNewProductBody } from '../../../utils/content/doc-sample-bodies.utils';

const Products = () => {
  return (
    <SectionWrapper>
      <SectionHeading>Products</SectionHeading>
      <Text>
        A total of 54 products exist in the database. Each product contains properties such as
        pricing, review data, specs, and more.
      </Text>

      <Endpoint
        anchorId="get-products"
        headingText="Get All Products"
        subdirectory="products"
        response={getAllProductsResponse}
      />

      <Endpoint
        anchorId="get-product"
        headingText="Get Product"
        subdirectory="products/{id}"
        response={getProductResponse}
      />

      <Endpoint
        anchorId="create-product"
        httpMethod="POST"
        headingText="Create New Product"
        subdirectory="products"
        requestBody={createNewProductBody}
        response={createNewProductResponse}
      />

      <AnchorHeading anchorId="update-product" httpMethod="PATCH">
        Update Product
      </AnchorHeading>

      <AnchorHeading anchorId="delete-product" httpMethod="DELETE">
        Delete Product
      </AnchorHeading>
    </SectionWrapper>
  );
};

export default Products;
