import { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setActiveAnchor, setIsSidebarOpen } from '../../../store/docs/docs.action';
import { Box, Heading, useToast, Flex, Badge, useMediaQuery } from '@chakra-ui/react';
import { FaAnchor, FaLock } from 'react-icons/fa';
import { scrollToAnchor } from '../../../utils/actions/actions.utils';
import { mobileMax } from '../../../utils/sizing/sizing.utils';

const observerOptions = {
  root: null,
  rootMargin: '0px 0px -80% 0px',
  threshold: 0,
};

const AnchorHeading = ({ anchorId, httpMethod, requiresAuth = false, children }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [isMobile] = useMediaQuery(`(max-width: ${mobileMax})`);
  const anchorRef = useRef(null);

  const handleAnchorCopy = event => {
    event.preventDefault();

    scrollToAnchor(anchorId);
    dispatch(setActiveAnchor(anchorId));
    if (isMobile) dispatch(setIsSidebarOpen(false));

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

  useEffect(() => {
    const intersectionCallback = entries => {
      const [entry] = entries;

      // prevent from setting anchor on initial render
      if (entry && entry.isIntersecting && entry.intersectionRatio > 0) {
        dispatch(setActiveAnchor(anchorId));
      }
    };

    const observer = new IntersectionObserver(intersectionCallback, observerOptions);
    const current = anchorRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [dispatch, anchorId]);

  return (
    <Box
      className="anchor-heading"
      position="relative"
      mt={8}
      mb={2}
      width="max-content"
      maxWidth="90%"
      ref={anchorRef}
    >
      <Flex alignItems="baseline" flexWrap="wrap">
        {httpMethod && (
          <Badge variant={httpMethod} mr={1.5} transform="translateY(-1px)">
            {httpMethod}
          </Badge>
        )}

        <Flex alignItems="baseline">
          <Heading id={anchorId} size="md" mb={0} mr={2} scrollMargin="85px">
            {children}
          </Heading>

          {requiresAuth && (
            <FaLock
              color="rgb(141, 141, 141)"
              display="inline-block"
              title="Requires authorization"
              aria-label="Requires authorization"
              size="14"
            />
          )}
        </Flex>
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
