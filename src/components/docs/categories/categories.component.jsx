import { Box } from '@chakra-ui/react';
import SectionHeading from '../../section-heading/section-heading.component';
import AnchorHeading from '../../anchor-heading/anchor-heading.component';

const Categories = () => {
  return (
    <Box as="section" mb="60px" pt="40px">
      <SectionHeading>Categories</SectionHeading>

      <AnchorHeading anchorId="get-categories">Get All Categories</AnchorHeading>
      <AnchorHeading anchorId="get-category">Get Category</AnchorHeading>
    </Box>
  );
};

export default Categories;
