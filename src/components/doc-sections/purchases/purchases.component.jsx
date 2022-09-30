import { Box } from '@chakra-ui/react';
import DocSectionHeading from '../../doc-section-heading/doc-section-heading.component';
import DocAnchor from '../../doc-anchor/doc-anchor.component';

const Purchases = () => {
  return (
    <Box as="section" mb="60px" pt="40px">
      <DocSectionHeading text="Purchases" />

      <DocAnchor text="Get All Purchases" anchorId="get-purchases" />
      <DocAnchor text="Get Purchase" anchorId="get-purchase" />
    </Box>
  );
};

export default Purchases;
