import { Link } from '@chakra-ui/react';

const ExternalLink = ({ href, children, variant = 'text' }) => {
  return (
    <Link href={href} className="link" variant={variant} isExternal>
      {children}
    </Link>
  );
};

export default ExternalLink;
