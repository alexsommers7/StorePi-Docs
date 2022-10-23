import SectionWrapper from '../../sections/wrapper/section-wrapper.component';
import SectionHeading from '../../sections/heading/section-heading.component';
import Endpoint from '../../endpoint/endpoint.component';
import {
  getAllUsersResponse,
  getUserResponse,
  updateCurrentUserResponse,
} from '../../../utils/content/doc-sample-responses.utils';
import { updateCurrentUserBody } from '../../../utils/content/doc-sample-bodies.utils';

const Users = () => {
  return (
    <SectionWrapper>
      <SectionHeading>Users</SectionHeading>

      <Endpoint
        anchorId="get-users"
        headingText="Get All Users"
        subdirectory="users"
        response={getAllUsersResponse}
      />

      <Endpoint
        anchorId="get-user"
        headingText="Get User"
        subdirectory="users/{id}"
        response={getUserResponse}
      />

      <Endpoint
        anchorId="get-current-user"
        headingText="Get Current User"
        subdirectory="users/current"
        response={getUserResponse}
        requiresAuth={true}
      />

      <Endpoint
        anchorId="update-current-user"
        httpMethod="PATCH"
        headingText="Update Current User"
        subdirectory="users/current"
        requestBody={updateCurrentUserBody}
        response={updateCurrentUserResponse}
        requiresAuth={true}
      />

      <Endpoint
        anchorId="delete-user"
        httpMethod="DELETE"
        headingText="Delete User"
        subdirectory="users/{id}"
      />

      <Endpoint
        anchorId="delete-current-user"
        httpMethod="DELETE"
        headingText="Delete Current User"
        subdirectory="users/current"
        requiresAuth={true}
      />
    </SectionWrapper>
  );
};

export default Users;
