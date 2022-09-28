import { Text, Box } from '@chakra-ui/react';

const Users = () => {
  return (
    <Box>
      <Text as="h1" fontSize="xl" minH="80vh" id="get-users">
        Get All Users
      </Text>

      <Text as="h1" fontSize="xl" minH="80vh" id="get-user">
        Get User
      </Text>
    </Box>
  );
};

export default Users;
