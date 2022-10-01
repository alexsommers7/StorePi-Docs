import { Box, Text } from '@chakra-ui/react';
import SectionHeading from '../../section-heading/section-heading.component';
import Anchor from '../../anchor-heading/anchor-heading.component';

const Users = () => {
  return (
    <Box as="section" mb="60px" pt="40px">
      <SectionHeading text="Users" />

      <Text mb="20px">
        Retrieve all users, get a specific user, edit, and delete users. You can also retrieve data
        on, update, or delete the currently-authenticated user.
      </Text>

      <Anchor text="Get All Users" anchorId="get-users" />
      <Anchor text="Get User" anchorId="get-user" />
    </Box>
  );
};

export default Users;
