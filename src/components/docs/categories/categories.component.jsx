import { Box } from '@chakra-ui/react';
import SectionHeading from '../../section-heading/section-heading.component';
import Anchor from '../../anchor-heading/anchor-heading.component';

const Categories = () => {
  return (
    <Box as="section" mb="60px" pt="40px">
      <SectionHeading text="Categories" />

      <Anchor text="Get All Categories" anchorId="get-categories" />
      <Anchor text="Get Category" anchorId="get-category" />
    </Box>
  );
};

export default Categories;
