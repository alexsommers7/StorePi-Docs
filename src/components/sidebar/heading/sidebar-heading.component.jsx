import { ListItem, Heading, useColorModeValue } from '@chakra-ui/react';

const SidebarHeading = ({ label }) => {
  const style = {
    fontWeight: useColorModeValue('bold', 'regular'),
  };

  return (
    <ListItem mb={3} mt={3}>
      <Heading size="sm" style={style}>
        {label}
      </Heading>
    </ListItem>
  );
};

export default SidebarHeading;
