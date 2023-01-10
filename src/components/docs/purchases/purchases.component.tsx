import SectionWrapper from '../../sections/wrapper/section-wrapper.component';
import SectionHeading from '../../sections/heading/section-heading.component';
import Endpoint from '../../endpoint/endpoint.component';
import {
  getAllPurchasesResponse,
  getPurchaseResponse,
  getCurrentUserPurchasesResponse,
  createPurchaseResponse,
} from '../../../utils/content/doc-sample-responses.utils';
import { createPurchaseBody } from '../../../utils/content/doc-sample-bodies.utils';

const Purchases = () => {
  return (
    <SectionWrapper>
      <SectionHeading>Purchases</SectionHeading>

      <Endpoint
        anchorId="get-purchases"
        headingText="Get All Purchases"
        subdirectory="purchases"
        response={getAllPurchasesResponse}
      />

      <Endpoint
        anchorId="get-purchase"
        headingText="Get Purchase"
        subdirectory="purchases"
        response={getPurchaseResponse}
      />

      <Endpoint
        anchorId="get-current-user-purchases"
        headingText="Get Current User Purchases"
        subdirectory="users/current/purchases"
        requiresAuth={true}
        response={getCurrentUserPurchasesResponse}
      />

      <Endpoint
        anchorId="create-purchase"
        httpMethod="POST"
        headingText="Create New Purchase"
        subdirectory="purchases"
        requestBody={createPurchaseBody}
        response={createPurchaseResponse}
      />
    </SectionWrapper>
  );
};

export default Purchases;
