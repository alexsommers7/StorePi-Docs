import { Link } from '@chakra-ui/react';

interface ExternalLinkProps {
  href: string;
  children: JSX.Element | JSX.Element | string;
  variant?: string;
}

const ExternalLink = ({ href, children, variant = 'text' }: ExternalLinkProps) => {
  return (
    <Link href={href} className="link" variant={variant} isExternal>
      {children}
    </Link>
  );
};

export default ExternalLink;
