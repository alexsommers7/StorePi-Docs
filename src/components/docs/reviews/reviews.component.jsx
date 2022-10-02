import SectionWrapper from '../section-wrapper/section-wrapper.component';
import SectionHeading from '../../section-heading/section-heading.component';
import AnchorHeading from '../../anchor-heading/anchor-heading.component';

const Reviews = () => {
  return (
    <SectionWrapper>
      <SectionHeading>Reviews</SectionHeading>

      <AnchorHeading anchorId="get-reviews">Get All Reviews</AnchorHeading>
      <AnchorHeading anchorId="get-review">Get Review</AnchorHeading>
    </SectionWrapper>
  );
};

export default Reviews;
