import { Box } from '@chakra-ui/react';
import Sidebar from '../../components/sidebar/sidebar.component';
import DocContent from '../../components/docs/docs.component';
import { DocsProvider } from '../../contexts/docs.context';

import './docs.styles.scss';

const Docs = () => {
  return (
    <DocsProvider>
      <Box maxWidth="1366px" m="auto" pb="50px" zIndex="base" className="docs">
        <Sidebar />
        <DocContent />
      </Box>
    </DocsProvider>
  );
};

export default Docs;
