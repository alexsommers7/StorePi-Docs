import { useEffect, useRef, useContext } from 'react';
import { DocsContext } from '../../contexts/docs.context';
import { useLocation } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Sidebar from '../../components/sidebar/sidebar.component';
import SidebarBackdrop from '../../components/sidebar/backdrop/sidebar-backdrop.component';
import DocContent from '../../components/docs/docs-content.component';
import { contentMaxWidth } from '../../utils/sizing/sizing.utils';
import { yOffset } from '../../utils/anchor/anchor.utils';
import './docs.styles.scss';

const Docs = () => {
  const { setActiveAnchor } = useContext(DocsContext);
  const scrolledRef = useRef(false);
  const { hash } = useLocation();

  // handle anchor link existing on render
  useEffect(() => {
    if (hash && !scrolledRef.current) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);

      if (!element) return;

      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });

      scrolledRef.current = true;
      setActiveAnchor(id);
    }
  });

  return (
    <Box maxWidth={contentMaxWidth.string} m="auto" zIndex="base">
      <Sidebar />
      <SidebarBackdrop />
      <DocContent />
    </Box>
  );
};

export default Docs;
