import SectionWrapper from '../../sections/wrapper/section-wrapper.component';
import SectionHeading from '../../sections/heading/section-heading.component';
import Endpoint from '../../endpoint/endpoint.component';
import {
  getAllCategoriesResponse,
  createOrUpdateCategoryResponse,
  getAllProductsInCategoryResponse,
} from '../../../utils/content/doc-sample-responses.utils';
import { createOrUpdateCategoryBody } from '../../../utils/content/doc-sample-bodies.utils';

const Categories = () => {
  return (
    <SectionWrapper>
      <SectionHeading>Categories</SectionHeading>

      <Endpoint
        anchorId="get-categories"
        headingText="Get All Categories"
        subdirectory="categories"
        response={getAllCategoriesResponse}
      />

      <Endpoint
        anchorId="get-category-products"
        headingText="Get All Products in Category"
        subdirectory="categories/{id}/products"
        response={getAllProductsInCategoryResponse}
      />

      <Endpoint
        anchorId="create-category"
        httpMethod="POST"
        headingText="Create New Category"
        subdirectory="categories"
        requestBody={createOrUpdateCategoryBody}
        response={createOrUpdateCategoryResponse}
      />

      <Endpoint
        anchorId="update-category"
        httpMethod="PATCH"
        headingText="Update Category"
        subdirectory="categories/{id}"
        requestBody={createOrUpdateCategoryBody}
        response={createOrUpdateCategoryResponse}
      />

      <Endpoint
        anchorId="delete-category"
        httpMethod="DELETE"
        headingText="Delete Category"
        subdirectory="categories/{id}"
      />
    </SectionWrapper>
  );
};

export default Categories;
