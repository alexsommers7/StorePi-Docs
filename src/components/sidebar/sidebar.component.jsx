import { useContext } from 'react';
import { DocsContext } from '../../contexts/docs.context';
import { Flex, UnorderedList, Box, useMediaQuery } from '@chakra-ui/react';

import { BorderColor } from '../../utils/color/colorModeValues.utils';
import { DocSidebarItems } from '../../utils/content/doc-sidebar.utils';
import SidebarLink from './sidebar-link/sidebar-link.component';
import SidebarHeading from './sidebar-heading/sidebar-heading.component';
import { docsSidebarWidth } from '../../utils/sizing/sizing.utils';
import { navHeight } from '../../utils/sizing/sizing.utils';
import { contentMaxWidth } from '../../utils/sizing/sizing.utils';
import './sidebar.styles.css';

const Sidebar = () => {
  const [isLargerThanMaxContent] = useMediaQuery(`(min-width: ${contentMaxWidth.num + 55}px)`);
  const { isSidebarOpen } = useContext(DocsContext);

  const openStyle = {
    width: '80%',
    transform: 'translateY(-1.125rem)',
  };

  // using transform instead of top/left so it remains fixed to container, not viewport
  return (
    <Box as="aside">
      <Flex
        direction="column"
        fontSize=".8125"
        p=".5rem 1.5rem 6.25rem"
        borderRight="1px solid transparent"
        borderColor={BorderColor}
        backgroundColor="var(--chakra-colors-chakra-body-bg)"
        position="fixed"
        transform={[
          'translate(-100%, -1.125rem)',
          'translate(-100%, -1.125rem)',
          `${isLargerThanMaxContent ? 'translate(-2rem, -1rem)' : 'translate(0, -1rem)'}`,
        ]}
        transition="transform .5s cubic-bezier(.19,1,.22,1)"
        width={docsSidebarWidth.string}
        height={['100vh', '100vh', `calc(100vh - ${navHeight.string})`]}
        overflowY="auto"
        className="scrollbar-y-thin"
        zIndex="popover"
        style={isSidebarOpen ? openStyle : {}}
      >
        <nav>
          <UnorderedList styleType="none" style={{ marginInlineStart: '2px' }}>
            {DocSidebarItems.map(item => {
              const { label, subitems } = item;

              return (
                <Box key={label} mb="1.875">
                  <SidebarHeading label={label} />
                  {subitems?.length &&
                    subitems.map(subitem => <SidebarLink item={subitem} key={subitem.anchor} />)}
                </Box>
              );
            })}
          </UnorderedList>
        </nav>
      </Flex>
    </Box>
  );
};

export default Sidebar;
