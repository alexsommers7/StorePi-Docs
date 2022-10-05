import SectionWrapper from '../../sections/wrapper/section-wrapper.component';
import SectionHeading from '../../sections/heading/section-heading.component';
import AnchorHeading from '../../links/anchor/anchor-heading.component';

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
