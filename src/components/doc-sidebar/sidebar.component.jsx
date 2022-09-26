import { Flex, UnorderedList } from '@chakra-ui/react';
import DocSidebarLink from '../doc-sidebar-link/doc-sidebar-link.component';
import { BorderColor } from '../../utils/color/colorModeValues.utils';
import { SidebarItems } from '../../utils/sidebar/sidebar-items';

const DocSidebar = () => {
  return (
    <Flex
      as="aside"
      direction="column"
      fontSize="sm"
      p="32px"
      borderRight="1px solid transparent"
      borderColor={BorderColor}
      position={['fixed', 'fixed', 'relative']}
      top={['57px', '57px', '0']}
      left={['-100%', '-100%', '0']}
      minH="calc(100vh - 57px)"
    >
      <nav>
        <UnorderedList styleType="none" style={{ marginInlineStart: '2px' }}>
          {SidebarItems.map(item => (
            <DocSidebarLink item={item} key={item.route} />
          ))}
        </UnorderedList>
      </nav>
    </Flex>
  );
};

export default DocSidebar;
