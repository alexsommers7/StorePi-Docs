import SectionWrapper from '../../sections/wrapper/section-wrapper.component';
import SectionHeading from '../../sections/heading/section-heading.component';
import AnchorHeading from '../../links/anchor/anchor-heading.component';

const Carts = () => {
  return (
    <SectionWrapper>
      <SectionHeading>Carts</SectionHeading>

      <AnchorHeading anchorId="get-carts">Get All Carts</AnchorHeading>
      <AnchorHeading anchorId="get-cart">Get Cart</AnchorHeading>
    </SectionWrapper>
  );
};

export default Carts;
