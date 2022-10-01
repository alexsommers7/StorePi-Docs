import { Box, Heading, useToast } from '@chakra-ui/react';
import { FaAnchor, FaClipboard } from 'react-icons/fa';

const AnchorHeading = ({ anchorId, children }) => {
  const handleAnchorCopy = () => {
    navigator.clipboard.writeText(`${window.location.href.split('#')[0]}#${anchorId}`);

    const toastId = 'anchor-copy-toast';
    if (!toast.isActive(toastId)) {
      toast({
        title: 'Link Copied to Clipboard',
        status: 'success',
        icon: <FaClipboard fontSize="22px" />,
        duration: 5000,
        isClosable: true,
        id: toastId,
      });
    }
  };

  const toast = useToast();

  return (
    <Box position="relative" mt="40px" mb="15px">
      <Heading id={anchorId} className="anchor-heading" size="md" mb="20px">
        {children}
      </Heading>

      <button className="anchor-copy" aria-label="Copy skip link" onClick={handleAnchorCopy}>
        <FaAnchor className="anchor-icon" />
      </button>
    </Box>
  );
};

export default AnchorHeading;
