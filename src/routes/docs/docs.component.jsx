import { Box } from '@chakra-ui/react';
import Sidebar from '../../components/sidebar/sidebar.component';
import DocContent from '../../components/docs/docs-content.component';
import { DocsProvider } from '../../contexts/docs.context';
import { contentMaxWidth } from '../../utils/sizing/sizing.utils';
import './docs.styles.scss';

const Docs = () => {
  return (
    <DocsProvider>
      <Box maxWidth={contentMaxWidth.string} m="auto" zIndex="base">
        <Sidebar />
        <DocContent />
      </Box>
    </DocsProvider>
  );
};

export default Docs;
