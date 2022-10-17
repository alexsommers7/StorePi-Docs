import { useEffect } from 'react';
import { Box, Code, Text } from '@chakra-ui/react';
import AnchorHeading from '../links/anchor/anchor-heading.component';
import CollapsibleCode from '../collapsible-code/collapsible-code.component';
import { apiOrigin } from '../../utils/content/doc-content.utils';
import Prism from 'prismjs';

const Endpoint = ({
  anchorId,
  httpMethod = 'GET',
  headingText,
  subdirectory,
  requestBody,
  response,
  requiresAuth = false,
}) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  const isDelete = httpMethod === 'DELETE';

  return (
    <Box mb={isDelete ? 6 : 20}>
      <AnchorHeading anchorId={anchorId} httpMethod={httpMethod} requiresAuth={requiresAuth}>
        {headingText}
      </AnchorHeading>
      <Box mb={7}>
        <Box overflowX="auto" className="no-scrollbar">
          <Code mt={4} mb={4}>
            {apiOrigin}/{subdirectory}
          </Code>
        </Box>

        {isDelete && (
          <Text>
            Returns <Code>204 No Content</Code>
          </Text>
        )}

        {requestBody && (
          <Box mb={7}>
            <Text mb={3}>Sample request body:</Text>
            <pre>
              <Code className="language-javascript">{requestBody}</Code>
            </pre>
          </Box>
        )}

        {response && <CollapsibleCode code={response} />}
      </Box>
    </Box>
  );
};

export default Endpoint;
