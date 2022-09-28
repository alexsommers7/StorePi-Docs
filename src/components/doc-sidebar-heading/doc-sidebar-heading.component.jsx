import { ListItem, Text, useColorModeValue } from '@chakra-ui/react';

const DocSidebarHeading = ({ label }) => {
  const style = {
    fontWeight: useColorModeValue('bold', 'regular'),
  };

  return (
    <ListItem mb="8px" mt="20px">
      <Text style={style}>{label}</Text>
    </ListItem>
  );
};

export default DocSidebarHeading;
