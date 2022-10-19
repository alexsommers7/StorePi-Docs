import { Box, Heading, useToast, Flex, Badge } from '@chakra-ui/react';
import { FaAnchor, FaLock } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import { scrollWithOffset } from '../../../utils/anchor/anchor.utils';

const AnchorHeading = ({ anchorId, httpMethod, requiresAuth = false, children }) => {
  const handleAnchorCopy = () => {
    navigator.clipboard.writeText(`${window.location.href.split('#')[0]}#${anchorId}`);

    const toastId = 'anchor-copy-toast';
    if (!toast.isActive(toastId)) {
      toast({
        title: 'Link Copied to Clipboard',
        status: 'success',
        duration: 5000,
        isClosable: true,
        id: toastId,
      });
    }
  };

  const toast = useToast();

  return (
    <Box className="anchor-heading" position="relative" mt={8} mb={2} width="max-content">
      <Flex alignItems="center">
        {httpMethod && (
          <Badge variant={httpMethod} mr={1.5}>
            {httpMethod}
          </Badge>
        )}

        <Heading id={anchorId} size="md" mb={0} mr={2}>
          {children}
        </Heading>

        {requiresAuth && (
          <FaLock
            color="rgb(141, 141, 141)"
            style={{ display: 'inline-block', transform: 'translateY(1px)' }}
            title="Requires authorization"
            aria-label="Requires authorization"
            size="14"
          />
        )}
      </Flex>

      <HashLink
        className="anchor-copy"
        aria-label="Copy skip link"
        title="Copy skip link"
        onClick={handleAnchorCopy}
        to={`#${anchorId}`}
        scroll={el => scrollWithOffset(el)}
        smooth
      >
        <FaAnchor />
      </HashLink>
    </Box>
  );
};

export default AnchorHeading;
