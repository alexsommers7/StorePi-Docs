import { ListItem, Heading, useColorModeValue } from '@chakra-ui/react';

const SidebarHeading = ({ label, isFirst }) => {
  const style = {
    fontWeight: useColorModeValue('bold', 'regular'),
  };

  return (
    <ListItem mb={3} mt={isFirst ? 4 : 10}>
      <Heading size="md" style={style}>
        {label}
      </Heading>
    </ListItem>
  );
};

export default SidebarHeading;
