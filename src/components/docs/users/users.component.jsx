import { Box, Text } from '@chakra-ui/react';
import SectionHeading from '../../section-heading/section-heading.component';
import AnchorHeading from '../../anchor-heading/anchor-heading.component';

const Users = () => {
  return (
    <Box as="section" mb="60px" pt="40px">
      <SectionHeading text="Users" />

      <Text mb="20px">
        Retrieve all users, get a specific user, edit, and delete users. You can also retrieve data
        on, update, or delete the currently-authenticated user.
      </Text>

      <AnchorHeading anchorId="get-users">Get All Users</AnchorHeading>
      <AnchorHeading anchorId="get-user">Get User</AnchorHeading>
    </Box>
  );
};

export default Users;
