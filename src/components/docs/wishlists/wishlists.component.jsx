import SectionWrapper from '../../sections/wrapper/section-wrapper.component';
import SectionHeading from '../../sections/heading/section-heading.component';
import Endpoint from '../../endpoint/endpoint.component';
import {
  getCurrentUserWishlistResponse,
  addProductToCurrentUserWishlistResponse,
} from '../../../utils/content/doc-sample-responses.utils';
import {
  addProductToCurrentUserWishlistBody,
  removeProductFromCurrentUserWishlistBody,
} from '../../../utils/content/doc-sample-bodies.utils';

const Wishlists = () => {
  return (
    <SectionWrapper>
      <SectionHeading>Wishlists</SectionHeading>

      <Endpoint
        anchorId="get-user-wishlist"
        headingText="Get Current User Wishlist"
        subdirectory="users/current/wishlist"
        requiresAuth={true}
        response={getCurrentUserWishlistResponse}
      />

      <Endpoint
        anchorId="add-to-user-wishlist"
        httpMethod="PATCH"
        headingText="Add to Current User Wishlist"
        subdirectory="users/current/wishlist"
        requiresAuth={true}
        requestBody={addProductToCurrentUserWishlistBody}
        response={addProductToCurrentUserWishlistResponse}
      />

      <Endpoint
        anchorId="remove-from-user-wishlist"
        httpMethod="DELETE"
        headingText="Remove From Current User Wishlist"
        subdirectory="users/current/wishlist"
        requiresAuth={true}
        requestBody={removeProductFromCurrentUserWishlistBody}
      />
    </SectionWrapper>
  );
};

export default Wishlists;
