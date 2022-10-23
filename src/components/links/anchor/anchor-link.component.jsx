import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setActiveAnchor } from '../../../store/docs/docs.action';
import { scrollToAnchor } from '../../../utils/actions/actions.utils';

const AnchorLink = ({ anchor, children }) => {
  const dispatch = useDispatch();

  const handleLinkClick = event => {
    event.preventDefault();
    scrollToAnchor(anchor);
    dispatch(setActiveAnchor(anchor));
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
