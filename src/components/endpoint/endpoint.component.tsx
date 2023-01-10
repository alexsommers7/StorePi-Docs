import { Box, Code, Text } from '@chakra-ui/react';
import AnchorHeading from '../links/anchor/anchor-heading.component';
import CollapsibleCode from '../collapsible-code/collapsible-code.component';
import { apiOrigin } from '../../utils/content/doc-content.utils';
import { HTTPMethods } from '../../utils/types/types.utils';

interface EndpointProps {
  anchorId: string;
  httpMethod?: keyof typeof HTTPMethods;
  headingText: string;
  subdirectory: string;
  requestBody?: string;
  response?: string;
  requiresAuth?: boolean;
  note?: string;
}

const Endpoint = ({
  anchorId,
  httpMethod = 'GET',
  headingText,
  subdirectory,
  requestBody,
  response,
  requiresAuth = false,
  note,
}: EndpointProps) => {
  const isDelete = httpMethod === 'DELETE';

  return (
    <Box mt={14} mb={isDelete ? 6 : 20}>
      <AnchorHeading anchorId={anchorId} httpMethod={httpMethod} requiresAuth={requiresAuth}>
        {headingText}
      </AnchorHeading>
      <Box mb={7}>
        <Box overflowX="auto">
          <Code mt={3} mb={5}>
            {apiOrigin}/{subdirectory}
          </Code>
        </Box>

        {note && <Text mb={4}>{note}</Text>}

        {requestBody && (
          <Box mb={5}>
            <Text mb={1}>Sample request body:</Text>
            <pre>
              <Code className="language-javascript">{requestBody}</Code>
            </pre>
          </Box>
        )}

        {isDelete && (
          <Text>
            Returns <Code>204 No Content</Code>
          </Text>
        )}

        {response && <CollapsibleCode code={response} />}
      </Box>
    </Box>
  );
};

export default Endpoint;
