import { Box } from '@chakra-ui/react';
import SectionHeading from '../../section-heading/section-heading.component';
import AnchorHeading from '../../anchor-heading/anchor-heading.component';

const Brands = () => {
  return (
    <Box as="section" mb="60px" pt="40px">
      <SectionHeading text="Brands" />

      <AnchorHeading anchorId="get-brands">Get All Brands</AnchorHeading>
      <AnchorHeading anchorId="get-brand">Get Brand</AnchorHeading>
    </Box>
  );
};

export default Brands;
