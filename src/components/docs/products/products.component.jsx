import { Text } from '@chakra-ui/react';
import Endpoint from '../../endpoint/endpoint.component';
import SectionWrapper from '../../sections/wrapper/section-wrapper.component';
import SectionHeading from '../../sections/heading/section-heading.component';
import {
  getAllProductsResponse,
  getProductResponse,
  createNewProductResponse,
} from '../../../utils/content/doc-sample-responses.utils';
import {
  createNewProductBody,
  updateProductBody,
} from '../../../utils/content/doc-sample-bodies.utils';

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

      <Endpoint
        anchorId="update-product"
        httpMethod="PATCH"
        headingText="Update Product"
        subdirectory="products/{id}"
        requestBody={updateProductBody}
        response={createNewProductResponse}
      />

      <Endpoint
        anchorId="delete-product"
        httpMethod="DELETE"
        headingText="Delete Product"
        subdirectory="products/{id}"
      />
    </SectionWrapper>
  );
};

export default Products;
