import { Text, Code } from '@chakra-ui/react';
import SectionWrapper from '../../sections/wrapper/section-wrapper.component';
import SectionHeading from '../../sections/heading/section-heading.component';
import AnchorHeading from '../../links/anchor/anchor-heading.component';

const Authentication = () => {
  return (
    <SectionWrapper useBottomMargin={false}>
      <SectionHeading>Authentication</SectionHeading>

      <Text>
        In order to provide a variety in the data, there are five user accounts available. You may
        log in as any of the five users. The structure of each user's email address is{' '}
        <Code>[firstName]@example.com</Code>, and each user's password is simply{' '}
        <Code>password</Code>. You may log in as any of the following users: <Code>Jodi</Code>,{' '}
        <Code>Amy</Code>, <Code>Jean</Code>, <Code>Cody</Code>, or <Code>Daisy</Code>.
      </Text>

      <AnchorHeading anchorId="sign-up">Sign Up</AnchorHeading>
      <AnchorHeading anchorId="log-in">Log In</AnchorHeading>
      <AnchorHeading anchorId="log-out">Log Out</AnchorHeading>
    </SectionWrapper>
  );
};

export default Authentication;
