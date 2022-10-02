import SectionWrapper from '../section-wrapper/section-wrapper.component';
import SectionHeading from '../../section-heading/section-heading.component';
import AnchorHeading from '../../anchor-heading/anchor-heading.component';

const Brands = () => {
  return (
    <SectionWrapper>
      <SectionHeading>Brands</SectionHeading>

      <AnchorHeading anchorId="get-brands">Get All Brands</AnchorHeading>
      <AnchorHeading anchorId="get-brand">Get Brand</AnchorHeading>
    </SectionWrapper>
  );
};

export default Brands;
