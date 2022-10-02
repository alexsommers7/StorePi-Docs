import SectionWrapper from '../../section-wrapper/section-wrapper.component';
import SectionHeading from '../../section-heading/section-heading.component';
import AnchorHeading from '../../anchor-heading/anchor-heading.component';

const Categories = () => {
  return (
    <SectionWrapper>
      <SectionHeading>Categories</SectionHeading>

      <AnchorHeading anchorId="get-categories">Get All Categories</AnchorHeading>
      <AnchorHeading anchorId="get-category">Get Category</AnchorHeading>
    </SectionWrapper>
  );
};

export default Categories;
