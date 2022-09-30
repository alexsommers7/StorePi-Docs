import { Box } from '@chakra-ui/react';
import DocSectionHeading from '../../doc-section-heading/doc-section-heading.component';
import DocAnchor from '../../doc-anchor/doc-anchor.component';

const Brands = () => {
  return (
    <Box as="section" mb="60px" pt="40px">
      <DocSectionHeading text="Brands" />

      <DocAnchor text="Get All Brands" anchorId="get-brands" />
      <DocAnchor text="Get Brand" anchorId="get-brand" />
    </Box>
  );
};

export default Brands;
