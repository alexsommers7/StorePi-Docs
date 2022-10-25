import SectionWrapper from '../../sections/wrapper/section-wrapper.component';
import SectionHeading from '../../sections/heading/section-heading.component';
import Endpoint from '../../endpoint/endpoint.component';
import {
  signupResponse,
  loginResponse,
  logoutResponse,
} from '../../../utils/content/doc-sample-responses.utils';
import { loginBody, signupBody } from '../../../utils/content/doc-sample-bodies.utils';

const Authentication = () => {
  return (
    <SectionWrapper>
      <SectionHeading>Authentication</SectionHeading>

      <Endpoint
        anchorId="sign-up"
        httpMethod="POST"
        headingText="Sign Up"
        subdirectory="users/signup"
        response={signupResponse}
        requestBody={signupBody}
        note="This endpoint will not include a valid JWT to be used for subsequent requests as it would in a real-world application. This is because the new user is not actually persisted to the database. If you need a token to access protected endpoints, use the log in endpoint as described below."
      />

      <Endpoint
        anchorId="log-in"
        httpMethod="POST"
        headingText="Log In"
        subdirectory="users/login"
        response={loginResponse}
        requestBody={loginBody}
        note="In order to provide a variety in the data, there are multiple user accounts available. The structure of each user's email address is [firstName]@example.com, and each user's password is simply 'password'. You may log in as any of the following users: Jodi, Amy, Jean, Cody, or Daisy."
      />

      <Endpoint
        anchorId="log-out"
        headingText="Log Out"
        subdirectory="users/logout"
        requiresAuth={true}
        response={logoutResponse}
      />
    </SectionWrapper>
  );
};

export default Authentication;
