import { Text } from '@chakra-ui/react';
import SectionWrapper from '../../sections/wrapper/section-wrapper.component';
import SectionHeading from '../../sections/heading/section-heading.component';
import Endpoint from '../../endpoint/endpoint.component';
import { getAllBrandsResponse } from '../../../utils/content/doc-sample-responses.utils';

const Brands = () => {
  return (
    <SectionWrapper>
      <SectionHeading>Brands</SectionHeading>
      <Text>A total of 47 brands exist in the database.</Text>

      <Endpoint
        anchorId="get-brands"
        headingText="Get All Brands"
        subdirectory="brands"
        response={getAllBrandsResponse}
      />
    </SectionWrapper>
  );
};

export default Brands;
