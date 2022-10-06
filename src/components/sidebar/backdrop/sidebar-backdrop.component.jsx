import { useContext } from 'react';
import { DocsContext } from '../../../contexts/docs.context';
import { useMediaQuery, Fade } from '@chakra-ui/react';
import { mobileMax } from '../../../utils/sizing/sizing.utils';

const SidebarBackdrop = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(DocsContext);
  const [isMobile] = useMediaQuery(`(max-width: ${mobileMax})`);

  const activeStyle = {
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.33)',
    backdropFilter: 'blur(2px)',
  };

  const handleBackdropClick = () => setIsSidebarOpen(false);

  return (
    <Fade
      in={isMobile && isSidebarOpen}
      style={isMobile && isSidebarOpen ? activeStyle : {}}
      onClick={handleBackdropClick}
    ></Fade>
  );
};

export default SidebarBackdrop;
