import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveAnchor } from '../../store/docs/docs.action';
import { useLocation } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Sidebar from '../../components/sidebar/sidebar.component';
import SidebarBackdrop from '../../components/sidebar/backdrop/sidebar-backdrop.component';
import DocContent from '../../components/docs/docs-content.component';
import { contentMaxWidth } from '../../utils/sizing/sizing.utils';
import { scrollToAnchorById } from '../../utils/actions/actions.utils';
import './docs.styles.scss';
import '../../utils/external-styles/prism.scss';

const Docs = () => {
  const dispatch = useDispatch();

  const scrolledRef = useRef(false);
  const { hash } = useLocation();

  // handle anchor link existing on initial render
  useEffect(() => {
    if (hash && !scrolledRef.current) {
      const id = hash.replace('#', '');

      if (!id) return;

      scrollToAnchorById(id);

      scrolledRef.current = true;
      dispatch(setActiveAnchor(id));
    }
  }, [dispatch, hash]);

  return (
    <Box maxWidth={contentMaxWidth.string} m="auto" zIndex="base">
      <Sidebar />
      <SidebarBackdrop />
      <DocContent />
    </Box>
  );
};

export default Docs;
