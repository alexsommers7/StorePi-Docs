import SectionWrapper from '../../sections/wrapper/section-wrapper.component';
import SectionHeading from '../../sections/heading/section-heading.component';
import AnchorHeading from '../../links/anchor/anchor-heading.component';

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
