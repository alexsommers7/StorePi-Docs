import { Box } from '@chakra-ui/react';
import SectionHeading from '../../section-heading/section-heading.component';
import Anchor from '../../anchor-heading/anchor-heading.component';

const Authentication = () => {
  return (
    <Box as="section" mb="60px" pt="40px">
      <SectionHeading text="Authentication" />

      <Anchor text="Sign Up" anchorId="sign-up" />
      <Anchor text="Log In" anchorId="log-in" />
      <Anchor text="Log Out" anchorId="log-out" />
    </Box>
  );
};

export default Authentication;
