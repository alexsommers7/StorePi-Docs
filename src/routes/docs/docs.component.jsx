import { useEffect, useRef, useContext } from 'react';
import { DocsProvider } from '../../contexts/docs.context';
import { DocsContext } from '../../contexts/docs.context';
import { useLocation } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Sidebar from '../../components/sidebar/sidebar.component';
import SidebarBackdrop from '../../components/sidebar/backdrop/sidebar-backdrop.component';
import DocContent from '../../components/docs/docs-content.component';
import { contentMaxWidth } from '../../utils/sizing/sizing.utils';
import { scrollToAnchor } from '../../utils/actions/actions.utils';
import './docs.styles.scss';
import '../../utils/external-styles/prism.scss';

const Docs = () => {
  const { setActiveAnchor } = useContext(DocsContext);
  const scrolledRef = useRef(false);
  const { hash } = useLocation();

  // handle anchor link existing on render
  useEffect(() => {
    if (hash && !scrolledRef.current) {
      const id = hash.replace('#', '');

      if (!id) return;

      scrollToAnchor(id);

      scrolledRef.current = true;
      setActiveAnchor(id);
    }
  });

  return (
    <Box maxWidth={contentMaxWidth.string} m="auto" zIndex="base">
      <DocsProvider>
        <Sidebar />
        <SidebarBackdrop />
        <DocContent />
      </DocsProvider>
    </Box>
  );
};

export default Docs;
