import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AnchorContext } from '../../../contexts/anchor.context';
import { scrollToAnchor } from '../../../utils/actions/actions.utils';

const AnchorLink = ({ anchor, children }) => {
  const { setActiveAnchor } = useContext(AnchorContext);

  const handleLinkClick = event => {
    event.preventDefault();
    scrollToAnchor(anchor);
    setActiveAnchor(anchor);
  };

  return (
    <NavLink
      className="link"
      aria-label="Copy skip link"
      title="Copy skip link"
      onClick={handleLinkClick}
      data-href={`#${anchor}`}
    >
      {children}
    </NavLink>
  );
};

export default AnchorLink;
