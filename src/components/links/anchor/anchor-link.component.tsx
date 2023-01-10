import { MouseEvent } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setActiveAnchor } from '../../../store/docs/docs.action';
import { scrollToAnchorById } from '../../../utils/actions/actions.utils';

interface AnchorLinkProps {
  anchor: string;
  children: JSX.Element | JSX.Element | string;
}

const AnchorLink = ({ anchor, children }: AnchorLinkProps) => {
  const dispatch = useDispatch();

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToAnchorById(anchor);
    dispatch(setActiveAnchor(anchor));
  };

  return (
    <NavLink
      to="#"
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
