import SectionWrapper from '../../sections/wrapper/section-wrapper.component';
import SectionHeading from '../../sections/heading/section-heading.component';
import AnchorHeading from '../../links/anchor/anchor-heading.component';

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
