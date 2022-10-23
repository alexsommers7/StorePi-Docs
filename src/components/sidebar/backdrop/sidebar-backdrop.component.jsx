import { useSelector, useDispatch } from 'react-redux';
import { selectIsSidebarOpen } from '../../../store/docs/docs.selector';
import { setIsSidebarOpen } from '../../../store/docs/docs.action';
import { useMediaQuery, Fade } from '@chakra-ui/react';
import { mobileMax } from '../../../utils/sizing/sizing.utils';

const SidebarBackdrop = () => {
  const dispatch = useDispatch();

  const isSidebarOpen = useSelector(selectIsSidebarOpen);
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

  const handleBackdropClick = () => dispatch(setIsSidebarOpen(false));

  return (
    <Fade
      in={isMobile && isSidebarOpen}
      style={isMobile && isSidebarOpen ? activeStyle : {}}
      onClick={handleBackdropClick}
    ></Fade>
  );
};

export default SidebarBackdrop;
