import { Link } from '@chakra-ui/react';

const ExternalLink = ({ href, children }) => {
  return (
    <Link href={href} className="link" isExternal>
      {children}
    </Link>
  );
};

export default ExternalLink;
