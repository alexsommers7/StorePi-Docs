import { Box, Text } from '@chakra-ui/react';
import DocSectionHeading from '../../doc-section-heading/doc-section-heading.component';
import DocAnchor from '../../doc-anchor/doc-anchor.component';

const Users = () => {
  return (
    <Box as="section" mb="60px" pt="40px">
      <DocSectionHeading text="Users" />

      <Text mb="20px">
        Retrieve all users, get a specific user, edit, and delete users. You can also retrieve data
        on, update, or delete the currently-authenticated user.
      </Text>

      <DocAnchor text="Get All Users" anchorId="get-users" />
      <DocAnchor text="Get User" anchorId="get-user" />
    </Box>
  );
};

export default Users;
