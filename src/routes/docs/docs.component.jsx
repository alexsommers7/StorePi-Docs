import { Box } from '@chakra-ui/react';
import DocSidebar from '../../components/doc-sidebar/sidebar.component';
import DocContent from '../../components/doc-sections/doc-content.component';
import { DocsProvider } from '../../contexts/docs.context';

import './docs.styles.scss';

const Docs = () => {
  return (
    <DocsProvider>
      <Box maxWidth="1366px" m="auto" pb="50px" zIndex="base" className="docs">
        <DocSidebar />
        <DocContent />
      </Box>
    </DocsProvider>
  );
};

export default Docs;
