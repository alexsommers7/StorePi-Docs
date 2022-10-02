import SectionWrapper from '../section-wrapper/section-wrapper.component';
import SectionHeading from '../../section-heading/section-heading.component';
import AnchorHeading from '../../anchor-heading/anchor-heading.component';

const Purchases = () => {
  return (
    <SectionWrapper>
      <SectionHeading>Purchases</SectionHeading>

      <AnchorHeading anchorId="get-purchases">Get All Purchases</AnchorHeading>
      <AnchorHeading anchorId="get-purchase">Get Purchase</AnchorHeading>
    </SectionWrapper>
  );
};

export default Purchases;
