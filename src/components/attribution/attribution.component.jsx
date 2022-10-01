import { Box, Text } from '@chakra-ui/react';
import ExternalLink from '../external-link/external-link.component';

const Attribution = () => {
  return (
    <Box pt="20px" textAlign="center">
      <Text>
        Created by <ExternalLink href="https://AlexSommers.com">Alex Sommers</ExternalLink>
      </Text>
    </Box>
  );
};

export default Attribution;
