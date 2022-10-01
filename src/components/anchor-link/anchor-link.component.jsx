import { useContext } from 'react';
import { DocsContext } from '../../contexts/docs.context';
import { HashLink } from 'react-router-hash-link';

import { scrollWithOffset } from '../../utils/anchor/anchor.utils';

const AnchorLink = ({ anchor, children }) => {
  const { setActiveAnchor } = useContext(DocsContext);

  const handleLinkClick = ({ target }) => {
    const { href } = target;
    const anchor = href.split('#')[1] || '';
    setActiveAnchor(anchor);
  };

  return (
    <HashLink
      className="link"
      to={`#${anchor}`}
      onClick={handleLinkClick}
      scroll={el => scrollWithOffset(el)}
      smooth
    >
      {children}
    </HashLink>
  );
};

export default AnchorLink;
