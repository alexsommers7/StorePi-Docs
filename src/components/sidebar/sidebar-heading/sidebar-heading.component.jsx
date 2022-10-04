import { ListItem, Heading, useColorModeValue } from '@chakra-ui/react';

const SidebarHeading = ({ label }) => {
  const style = {
    fontWeight: useColorModeValue('bold', 'regular'),
  };

  return (
    <ListItem mb=".2rem" mt="1.25rem">
      <Heading size="xs" style={style}>
        {label}
      </Heading>
    </ListItem>
  );
};

export default SidebarHeading;
