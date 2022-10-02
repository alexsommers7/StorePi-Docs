import SectionWrapper from '../section-wrapper/section-wrapper.component';
import SectionHeading from '../../section-heading/section-heading.component';
import AnchorHeading from '../../anchor-heading/anchor-heading.component';

const Authentication = () => {
  return (
    <SectionWrapper>
      <SectionHeading>Authentication</SectionHeading>

      <AnchorHeading anchorId="sign-up">Sign Up</AnchorHeading>
      <AnchorHeading anchorId="log-in">Log In</AnchorHeading>
      <AnchorHeading anchorId="log-out">Log Out</AnchorHeading>
    </SectionWrapper>
  );
};

export default Authentication;
