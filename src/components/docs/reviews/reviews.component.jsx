import { Box } from '@chakra-ui/react';
import SectionHeading from '../../section-heading/section-heading.component';
import AnchorHeading from '../../anchor-heading/anchor-heading.component';

const Reviews = () => {
  return (
    <Box as="section" mb="60px" pt="40px">
      <SectionHeading>Reviews</SectionHeading>

      <AnchorHeading anchorId="get-reviews">Get All Reviews</AnchorHeading>
      <AnchorHeading anchorId="get-review">Get Review</AnchorHeading>
    </Box>
  );
};

export default Reviews;
