import { Flex, UnorderedList, Box } from '@chakra-ui/react';

import { BorderColor } from '../../utils/color/colorModeValues.utils';
import { DocSidebarItems } from '../../utils/content/doc-sidebar.utils';
import SidebarLink from './sidebar-link/sidebar-link.component';
import SidebarHeading from './sidebar-heading/sidebar-heading.component';
import { docsSidebarWidth } from '../../utils/sizing/sizing.utils';
import { navHeight } from '../../utils/sizing/sizing.utils';
import './sidebar.styles.css';

const Sidebar = () => {
  return (
    <Flex
      as="aside"
      direction="column"
      fontSize="13px"
      p="8px 32px 24px"
      borderRight="1px solid transparent"
      borderColor={BorderColor}
      position="fixed"
      top={navHeight}
      left={['-100%', '-100%', '0']}
      width={docsSidebarWidth}
      height={['100vh', '100vh', `calc(100vh - ${navHeight})`]}
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
  );
};

export default Sidebar;
