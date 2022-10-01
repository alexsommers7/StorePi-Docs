import { Box } from '@chakra-ui/react';
import SectionHeading from '../../section-heading/section-heading.component';
import AnchorHeading from '../../anchor-heading/anchor-heading.component';

const Authentication = () => {
  return (
    <Box as="section" mb="60px" pt="40px">
      <SectionHeading>Authentication</SectionHeading>

      <AnchorHeading anchorId="sign-up">Sign Up</AnchorHeading>
      <AnchorHeading anchorId="log-in">Log In</AnchorHeading>
      <AnchorHeading anchorId="log-out">Log Out</AnchorHeading>
    </Box>
  );
};

export default Authentication;
