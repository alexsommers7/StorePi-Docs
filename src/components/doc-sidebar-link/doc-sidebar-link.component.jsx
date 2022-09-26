import { ListItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const DocSidebarLink = ({ item }) => {
  const { label, route, isHeader } = item;
  const activeStyle = {
    textShadow: '.25px 0px .1px,-.25px 0px .1px',
    color: '#38B2AC',
  };

  return (
    <ListItem mb="10px" mt={isHeader && '20px'}>
      <NavLink to={route} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        {label}
      </NavLink>
    </ListItem>
  );
};

export default DocSidebarLink;
