import SectionWrapper from '../../section-wrapper/section-wrapper.component';
import SectionHeading from '../../section-heading/section-heading.component';
import AnchorHeading from '../../anchor-heading/anchor-heading.component';

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
