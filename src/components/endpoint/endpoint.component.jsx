import { Box, Code } from '@chakra-ui/react';
import AnchorHeading from '../links/anchor/anchor-heading.component';
import CodeSnippet from '../code-snippet/code-snippet.component';
import { apiOrigin } from '../../utils/content/doc-content.utils';

const Endpoint = ({
  anchorId,
  httpMethod = 'GET',
  headingText,
  subdirectory,
  code,
  requiresAuth = false,
}) => {
  return (
    <Box>
      <AnchorHeading anchorId={anchorId} httpMethod={httpMethod} requiresAuth={requiresAuth}>
        {headingText}
      </AnchorHeading>
      <Box mb={7}>
        <Code mb={7}>
          {apiOrigin}/{subdirectory}
        </Code>
        <CodeSnippet code={code} />
      </Box>
    </Box>
  );
};

export default Endpoint;
