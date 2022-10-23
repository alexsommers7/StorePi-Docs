import { Text } from '@chakra-ui/react';
import SectionWrapper from '../../sections/wrapper/section-wrapper.component';
import SectionHeading from '../../sections/heading/section-heading.component';
import Endpoint from '../../endpoint/endpoint.component';
import {
  getAllReviewsResponse,
  getReviewResponse,
  getProductReviewsResponse,
  getCurrentUserReviewsResponse,
  createOrUpdateReviewResponse,
} from '../../../utils/content/doc-sample-responses.utils';
import { createOrUpdateReviewBody } from '../../../utils/content/doc-sample-bodies.utils';

const Reviews = () => {
  return (
    <SectionWrapper>
      <SectionHeading>Reviews</SectionHeading>
      <Text>
        A total of 188 reviews exist in the database. Each review contains properties such as
        rating, incentivization, verification, and more.
      </Text>

      <Endpoint
        anchorId="get-reviews"
        headingText="Get All Reviews"
        subdirectory="reviews"
        response={getAllReviewsResponse}
      />

      <Endpoint
        anchorId="get-review"
        headingText="Get Review"
        subdirectory="reviews/{id}"
        response={getReviewResponse}
      />

      <Endpoint
        anchorId="get-product-reviews"
        headingText="Get Product's Reviews"
        subdirectory="products/{id}/reviews"
        response={getProductReviewsResponse}
      />

      <Endpoint
        anchorId="get-user-reviews"
        headingText="Get Current User Reviews"
        subdirectory="users/current/reviews"
        response={getCurrentUserReviewsResponse}
        requiresAuth={true}
      />

      <Endpoint
        anchorId="create-review"
        httpMethod="POST"
        headingText="Create New Review"
        subdirectory="products/{id}/reviews"
        requestBody={createOrUpdateReviewBody}
        response={createOrUpdateReviewResponse}
      />

      <Endpoint
        anchorId="update-review"
        httpMethod="PATCH"
        headingText="Update Review"
        subdirectory="reviews/{id}"
        requestBody={createOrUpdateReviewBody}
        response={createOrUpdateReviewResponse}
        requiresAuth={true}
        note="The review being updated must belong to the currently authenticated user."
      />

      <Endpoint
        anchorId="delete-review"
        httpMethod="DELETE"
        headingText="Delete Review"
        subdirectory="reviews/{id}"
        requiresAuth={true}
        note="The review being deleted must belong to the currently authenticated user."
      />
    </SectionWrapper>
  );
};

export default Reviews;
