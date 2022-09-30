import { Flex, UnorderedList, Box } from '@chakra-ui/react';
import { BorderColor } from '../../utils/color/colorModeValues.utils';
import { DocSidebarItems } from '../../utils/content/doc-sidebar.utils';
import DocSidebarLink from '../doc-sidebar-link/doc-sidebar-link.component';
import DocSidebarHeading from '../doc-sidebar-heading/doc-sidebar-heading.component';
import './sidebar.styles.css';

const DocSidebar = () => {
  return (
    <Flex
      as="aside"
      direction="column"
      fontSize="13px"
      p="8px 32px 24px"
      borderRight="1px solid transparent"
      borderColor={BorderColor}
      position="fixed"
      top="57px"
      left={['-100%', '-100%', '0']}
      width="270px"
      height={['100vh', '100vh', 'calc(100vh - 57px)']}
      overflowY="auto"
      className="scrollbar-y-thin"
    >
      <nav>
        <UnorderedList styleType="none" style={{ marginInlineStart: '2px' }}>
          {DocSidebarItems.map(item => {
            const { label, subitems } = item;

            return (
              <Box key={label}>
                <DocSidebarHeading label={label} />
                {subitems?.length &&
                  subitems.map(subitem => <DocSidebarLink item={subitem} key={subitem.anchor} />)}
              </Box>
            );
          })}
        </UnorderedList>
      </nav>
    </Flex>
  );
};

export default DocSidebar;
