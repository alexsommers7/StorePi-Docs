import { useContext } from 'react';
import { DocsContext } from '../../contexts/docs.context';
import { ListItem, useColorModeValue } from '@chakra-ui/react';
import { HashLink } from 'react-router-hash-link';

const DocSidebarLink = ({ item }) => {
  const { label, anchor } = item;
  const { activeAnchor, setActiveAnchor } = useContext(DocsContext);

  const inactiveStyle = {
    color: useColorModeValue('blackAlpha.100', 'rgba(235, 235, 235, .6)'),
  };

  const activeStyle = {
    textShadow: '.25px 0px .1px,-.25px 0px .1px',
    color: '#38B2AC',
  };

  const scrollWithOffset = el => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  const isActive = anchor === activeAnchor;

  const linkClickHandler = event => {
    const { href } = event.target;
    const anchor = href.split('#')[1] || '';
    setActiveAnchor(anchor);
  };

  return (
    <ListItem mb="8px">
      <HashLink
        to={`#${anchor}`}
        style={isActive ? activeStyle : inactiveStyle}
        scroll={el => scrollWithOffset(el)}
        onClick={linkClickHandler}
        smooth
      >
        {label}
      </HashLink>
    </ListItem>
  );
};

export default DocSidebarLink;
