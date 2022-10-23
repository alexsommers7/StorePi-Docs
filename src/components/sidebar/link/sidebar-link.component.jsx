import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSidebarOpen, setActiveAnchor } from '../../../store/docs/docs.action';
import { selectActiveAnchor } from '../../../store/docs/docs.selector';
import { NavLink } from 'react-router-dom';
import { ListItem, useMediaQuery } from '@chakra-ui/react';
import { mobileMax } from '../../../utils/sizing/sizing.utils';
import { scrollToAnchor } from '../../../utils/actions/actions.utils';

const SidebarLink = ({ item }) => {
  const dispatch = useDispatch();

  const { label, anchor } = item;
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const activeAnchor = useSelector(selectActiveAnchor);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeAnchor]);

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => setIsHovered(false);

  const handleLinkClick = event => {
    event.preventDefault();
    scrollToAnchor(anchor);
    dispatch(setActiveAnchor(anchor));
    if (isMobile) dispatch(setIsSidebarOpen(false));
  };

  return (
    <ListItem mb={2}>
      <NavLink
        data-href={`#${anchor}`}
        style={() => (isActive ? activeStyle : inactiveStyle)}
        onClick={handleLinkClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {label}
      </NavLink>
    </ListItem>
  );
};

export default SidebarLink;
