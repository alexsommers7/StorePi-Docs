import SectionWrapper from '../../sections/wrapper/section-wrapper.component';
import SectionHeading from '../../sections/heading/section-heading.component';
import Endpoint from '../../endpoint/endpoint.component';
import {
  getAllCartsResponse,
  getCartResponse,
  getCurrentUserCartResponse,
  addProductToCurrentUserCartResponse,
  createNewCartResponse,
} from '../../../utils/content/doc-sample-responses.utils';
import {
  createNewCartBody,
  addProductToCurrentUserCartBody,
  removeProductFromCurrentUserCartBody,
} from '../../../utils/content/doc-sample-bodies.utils';

const Carts = () => {
  return (
    <SectionWrapper>
      <SectionHeading>Carts</SectionHeading>

      <Endpoint
        anchorId="get-carts"
        headingText="Get All Carts"
        subdirectory="carts"
        response={getAllCartsResponse}
      />

      <Endpoint
        anchorId="get-cart"
        headingText="Get Cart"
        subdirectory="carts"
        response={getCartResponse}
      />

      <Endpoint
        anchorId="get-user-cart"
        headingText="Get Current User Cart"
        subdirectory="users/current/cart"
        response={getCurrentUserCartResponse}
      />

      <Endpoint
        anchorId="add-to-user-cart"
        httpMethod="PATCH"
        headingText="Add to Current User Cart"
        subdirectory="users/current/cart"
        requestBody={addProductToCurrentUserCartBody}
        response={addProductToCurrentUserCartResponse}
      />

      <Endpoint
        anchorId="remove-from-user-cart"
        httpMethod="DELETE"
        headingText="Remove From Current User Cart"
        subdirectory="users/current/cart"
        requestBody={removeProductFromCurrentUserCartBody}
      />

      <Endpoint
        anchorId="delete-cart"
        httpMethod="DELETE"
        headingText="Delete Cart"
        subdirectory="carts/{id}"
      />
    </SectionWrapper>
  );
};

export default Carts;
