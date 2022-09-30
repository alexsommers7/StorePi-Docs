import { Box } from '@chakra-ui/react';
import DocSectionHeading from '../../doc-section-heading/doc-section-heading.component';
import DocAnchor from '../../doc-anchor/doc-anchor.component';

const Categories = () => {
  return (
    <Box as="section" mb="60px" pt="40px">
      <DocSectionHeading text="Categories" />

      <DocAnchor text="Get All Categories" anchorId="get-categories" />
      <DocAnchor text="Get Category" anchorId="get-category" />
    </Box>
  );
};

export default Categories;
