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

  /*
		these are the necessary styles for active mobile nav:
		left: 0;
		width: 100%;
	*/

  // using transform instead of top/left so it remains fixed to container, not viewport
  return (
    <Box as="aside">
      <Flex
        direction="column"
        fontSize="13px"
        p="8px 32px 24px"
        borderRight="1px solid transparent"
        borderColor={BorderColor}
        backgroundColor="var(--chakra-colors-chakra-body-bg)"
        position="fixed"
        transform={[
          'translateX(-100%)',
          'translateX(-100%)',
          `${isLargerThanMaxContent ? 'translate(-32px, -16px)' : 'translate(0, -16px)'}`,
        ]}
        width={docsSidebarWidth.string}
        height={['100vh', '100vh', `calc(100vh - ${navHeight.string})`]}
        overflowY="auto"
        className="scrollbar-y-thin"
      >
        <nav>
          <UnorderedList styleType="none" style={{ marginInlineStart: '2px' }}>
            {DocSidebarItems.map(item => {
              const { label, subitems } = item;

              return (
                <Box key={label} mb="30px">
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
