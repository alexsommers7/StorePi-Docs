import { Box } from '@chakra-ui/react';
import SectionHeading from '../../section-heading/section-heading.component';
import Anchor from '../../anchor-heading/anchor-heading.component';

const Reviews = () => {
  return (
    <Box as="section" mb="60px" pt="40px">
      <SectionHeading text="Reviews" />

      <Anchor text="Get All Reviews" anchorId="get-reviews" />
      <Anchor text="Get Review" anchorId="get-review" />
    </Box>
  );
};

export default Reviews;
