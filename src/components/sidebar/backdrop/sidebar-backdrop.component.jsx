import { useContext } from 'react';
import { SidebarContext } from '../../../contexts/sidebar.context';
import { useMediaQuery, Fade } from '@chakra-ui/react';
import { mobileMax } from '../../../utils/sizing/sizing.utils';

const SidebarBackdrop = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);
  const [isMobile] = useMediaQuery(`(max-width: ${mobileMax})`);

  const activeStyle = {
    height: '100%',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.33)',
    backdropFilter: 'blur(1px)',
    zIndex: '10',
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
