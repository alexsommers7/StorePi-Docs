import { Box } from '@chakra-ui/react';
import DocSectionHeading from '../../doc-section-heading/doc-section-heading.component';
import DocAnchor from '../../doc-anchor/doc-anchor.component';

const Reviews = () => {
  return (
    <Box as="section" mb="60px" pt="40px">
      <DocSectionHeading text="Reviews" />

      <DocAnchor text="Get All Reviews" anchorId="get-reviews" />
      <DocAnchor text="Get Review" anchorId="get-review" />
    </Box>
  );
};

export default Reviews;
