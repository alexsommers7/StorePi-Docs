import { Box, Code, Text } from '@chakra-ui/react';
import AnchorHeading from '../links/anchor/anchor-heading.component';
import CollapsibleCode from '../collapsible-code/collapsible-code.component';
import { apiOrigin } from '../../utils/content/doc-content.utils';

const Endpoint = ({
  anchorId,
  httpMethod = 'GET',
  headingText,
  subdirectory,
  requestBody,
  response,
  requiresAuth = false,
}) => {
  const isDelete = httpMethod === 'DELETE';

  return (
    <Box mb={isDelete ? 6 : 20}>
      <AnchorHeading anchorId={anchorId} httpMethod={httpMethod} requiresAuth={requiresAuth}>
        {headingText}
      </AnchorHeading>
      <Box mb={7}>
        <Code mt={4} mb={7}>
          {apiOrigin}/{subdirectory}
        </Code>

        {isDelete && (
          <Text>
            Returns <Code>204</Code> No Content
          </Text>
        )}

        {requestBody && (
          <Box mb={7}>
            <Text mb={2}>Sample request body:</Text>
            <pre>
              <Code>{requestBody}</Code>
            </pre>
          </Box>
        )}

        {response && <CollapsibleCode code={response} />}
      </Box>
    </Box>
  );
};

export default Endpoint;
