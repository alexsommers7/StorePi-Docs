import { Box } from '@chakra-ui/react';
import SectionHeading from '../../section-heading/section-heading.component';
import Anchor from '../../anchor-heading/anchor-heading.component';

const Brands = () => {
  return (
    <Box as="section" mb="60px" pt="40px">
      <SectionHeading text="Brands" />

      <Anchor text="Get All Brands" anchorId="get-brands" />
      <Anchor text="Get Brand" anchorId="get-brand" />
    </Box>
  );
};

export default Brands;
