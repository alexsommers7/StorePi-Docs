import { useState, useContext, useEffect } from 'react';
import { DocsContext } from '../../../contexts/docs.context';
import { ListItem, useMediaQuery } from '@chakra-ui/react';
import { HashLink } from 'react-router-hash-link';
import { scrollWithOffset } from '../../../utils/anchor/anchor.utils';
import { mobileMax } from '../../../utils/sizing/sizing.utils';

const SidebarLink = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { label, anchor } = item;
  const { activeAnchor, setActiveAnchor, setIsSidebarOpen } = useContext(DocsContext);
  const [isActive, setIsActive] = useState(anchor === activeAnchor);
  const [isMobile] = useMediaQuery(`(max-width: ${mobileMax})`);

  const inactiveStyle = {
    transition: 'all .2s ease',
    color: isHovered ? 'var(--chakra-colors-brand-200)' : 'inherit',
    textShadow: isHovered ? '.25px 0px .1px,-.25px 0px .1px' : 'none',
  };

  const activeStyle = {
    textShadow: '.25px 0px .1px,-.25px 0px .1px',
    color: 'var(--chakra-colors-brand-200)',
  };

  useEffect(() => {
    setIsActive(anchor === activeAnchor);
  }, [anchor, activeAnchor]);

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => setIsHovered(false);

  const handleLinkClick = event => {
    const { href } = event.target;
    const anchor = href.split('#')[1] || '';
    setActiveAnchor(anchor);
    if (isMobile) setIsSidebarOpen(false);
  };

  return (
    <ListItem mb={2}>
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
