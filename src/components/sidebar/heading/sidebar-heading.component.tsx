import { ListItem, Heading, useColorModeValue } from '@chakra-ui/react';

interface SidebarHeadingProps {
  label: string;
  isFirst?: boolean;
}

const SidebarHeading = ({ label, isFirst = false }: SidebarHeadingProps) => {
  const style = {
    fontWeight: useColorModeValue('bold', 'regular'),
  };

  return (
    <ListItem mb={3} mt={isFirst ? 4 : 8}>
      <Heading size="md" style={style}>
        {label}
      </Heading>
    </ListItem>
  );
};

export default SidebarHeading;
