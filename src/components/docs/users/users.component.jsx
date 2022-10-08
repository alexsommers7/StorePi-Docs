import { Text } from '@chakra-ui/react';
import SectionWrapper from '../../sections/wrapper/section-wrapper.component';
import SectionHeading from '../../sections/heading/section-heading.component';
import AnchorHeading from '../../links/anchor/anchor-heading.component';

const Users = () => {
  return (
    <SectionWrapper>
      <SectionHeading>Users</SectionHeading>

      <Text mb={5}>
        Retrieve all users, get a specific user, edit, and delete users. You can also retrieve data
        on, update, or delete the currently-authenticated user.
      </Text>

      <AnchorHeading anchorId="get-users">Get All Users</AnchorHeading>
      <AnchorHeading anchorId="get-user">Get User</AnchorHeading>
    </SectionWrapper>
  );
};

export default Users;
