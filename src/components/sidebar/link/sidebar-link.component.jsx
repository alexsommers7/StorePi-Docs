import { useState, useContext } from 'react';
import { DocsContext } from '../../../contexts/docs.context';
import { ListItem, useColorModeValue } from '@chakra-ui/react';
import { HashLink } from 'react-router-hash-link';

import { scrollWithOffset } from '../../../utils/anchor/anchor.utils';

const SidebarLink = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { label, anchor } = item;
  const { activeAnchor, setActiveAnchor } = useContext(DocsContext);
  const isActive = anchor === activeAnchor;
  const defaultColor = useColorModeValue('blackAlpha.100', 'rgba(235, 235, 235, .5)');

  const inactiveStyle = {
    transition: 'all .2s ease',
    color: isHovered ? 'var(--chakra-colors-brand-200)' : defaultColor,
    textShadow: isHovered ? '.25px 0px .1px,-.25px 0px .1px' : 'none',
  };

  const activeStyle = {
    textShadow: '.25px 0px .1px,-.25px 0px .1px',
    color: 'var(--chakra-colors-brand-200)',
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => setIsHovered(false);

  const handleLinkClick = event => {
    const { href } = event.target;
    const anchor = href.split('#')[1] || '';
    setActiveAnchor(anchor);
    console.log({ anchor });
  };

  return (
    <ListItem mb=".5rem">
      <HashLink
        to={`#${anchor}`}
        style={isActive ? activeStyle : inactiveStyle}
        scroll={el => scrollWithOffset(el)}
        onClick={handleLinkClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        smooth
      >
        {label}
      </HashLink>
    </ListItem>
  );
};

export default SidebarLink;
