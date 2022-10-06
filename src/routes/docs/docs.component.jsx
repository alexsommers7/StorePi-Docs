import { Box } from '@chakra-ui/react';
import Sidebar from '../../components/sidebar/sidebar.component';
import SidebarBackdrop from '../../components/sidebar/backdrop/sidebar-backdrop.component';
import DocContent from '../../components/docs/docs-content.component';
import { contentMaxWidth } from '../../utils/sizing/sizing.utils';
import './docs.styles.scss';

const Docs = () => {
  return (
    <Box maxWidth={contentMaxWidth.string} m="auto" zIndex="base">
      <Sidebar />
      <SidebarBackdrop />
      <DocContent />
    </Box>
  );
};

export default Docs;
