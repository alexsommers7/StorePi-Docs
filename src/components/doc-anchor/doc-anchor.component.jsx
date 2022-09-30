import { Box, Heading, useToast } from '@chakra-ui/react';
import { FaAnchor, FaClipboard } from 'react-icons/fa';

const DocAnchor = ({ text, anchorId }) => {
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
    <Box position="relative">
      <Heading id={anchorId} className="anchor-heading" size="md">
        {text}
      </Heading>

      <button className="anchor-copy" aria-label="Copy skip link" onClick={handleAnchorCopy}>
        <FaAnchor className="anchor-icon" />
      </button>
    </Box>
  );
};

export default DocAnchor;
