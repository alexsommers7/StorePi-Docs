import { Text, Code } from '@chakra-ui/react';
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

      <Text>
        In order to provide a variety in the data, there are multiple user accounts available. The
        structure of each user's email address is <Code>[firstName]@example.com</Code>, and each
        user's password is simply <Code>password</Code>. You may log in as any of the following
        users: <Code>Jodi</Code>, <Code>Amy</Code>, <Code>Jean</Code>, <Code>Cody</Code>, or{' '}
        <Code>Daisy</Code>.
      </Text>

      <Endpoint
        anchorId="sign-up"
        httpMethod="POST"
        headingText="Sign Up"
        subdirectory="users/signup"
        response={signupResponse}
        requestBody={signupBody}
      />

      <Endpoint
        anchorId="log-in"
        httpMethod="POST"
        headingText="Log In"
        subdirectory="users/login"
        response={loginResponse}
        requestBody={loginBody}
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
