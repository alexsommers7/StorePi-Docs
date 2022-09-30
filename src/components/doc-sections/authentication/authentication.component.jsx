import { Box } from '@chakra-ui/react';
import DocSectionHeading from '../../doc-section-heading/doc-section-heading.component';
import DocAnchor from '../../doc-anchor/doc-anchor.component';

const Authentication = () => {
  return (
    <Box as="section" mb="60px" pt="40px">
      <DocSectionHeading text="Authentication" />

      <DocAnchor text="Sign Up" anchorId="sign-up" />
      <DocAnchor text="Log In" anchorId="log-in" />
      <DocAnchor text="Log Out" anchorId="log-out" />
    </Box>
  );
};

export default Authentication;
