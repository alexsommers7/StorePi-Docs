import { useContext } from 'react';
import { AnchorContext } from '../../../contexts/anchor.context';
import { SidebarContext } from '../../../contexts/sidebar.context';
import { NavLink } from 'react-router-dom';
import { Box, Heading, useToast, Flex, Badge, useMediaQuery } from '@chakra-ui/react';
import { FaAnchor, FaLock } from 'react-icons/fa';
import { scrollToAnchor } from '../../../utils/actions/actions.utils';
import { mobileMax } from '../../../utils/sizing/sizing.utils';

const AnchorHeading = ({ anchorId, httpMethod, requiresAuth = false, children }) => {
  const { setActiveAnchor } = useContext(AnchorContext);
  const { setIsSidebarOpen } = useContext(SidebarContext);
  const [isMobile] = useMediaQuery(`(max-width: ${mobileMax})`);

  const handleAnchorCopy = event => {
    event.preventDefault();

    scrollToAnchor(anchorId);
    setActiveAnchor(anchorId);
    if (isMobile) setIsSidebarOpen(false);

    navigator.clipboard.writeText(`${window.location.href.split('#')[0]}#${anchorId}`);

    const toastId = 'anchor-copy-toast';
    if (!toast.isActive(toastId)) {
      setTimeout(() => {
        toast({
          title: 'Link Copied to Clipboard',
          status: 'success',
          duration: 5000,
          isClosable: true,
          id: toastId,
        });
      }, 300);
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

        <Heading id={anchorId} size="md" mb={0} mr={2} style={{ scrollMargin: '85px' }}>
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

      <NavLink
        className="anchor-copy"
        aria-label="Copy skip link"
        title="Copy skip link"
        onClick={handleAnchorCopy}
        data-href={`#${anchorId}`}
      >
        <FaAnchor />
      </NavLink>
    </Box>
  );
};

export default AnchorHeading;
