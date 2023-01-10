import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsSidebarOpen } from '../../store/docs/docs.selector';
import { Flex, UnorderedList, Box, useMediaQuery, useColorModeValue } from '@chakra-ui/react';
import { selectActiveAnchor } from '../../store/docs/docs.selector';
import { DocSidebarItems } from '../../utils/content/doc-sidebar.utils';
import SidebarLink from './link/sidebar-link.component';
import SidebarHeading from './heading/sidebar-heading.component';
import { docsSidebarWidth } from '../../utils/sizing/sizing.utils';
import { navHeight } from '../../utils/sizing/sizing.utils';
import { contentMaxWidth } from '../../utils/sizing/sizing.utils';

const openStyle = {
  transform: 'translateY(-1.25rem)',
};

const scrollToSidebarSection = (hash: string) =>
  document
    .querySelector(`[data-href="#${hash}"]`)
    ?.closest('ul')
    ?.scrollIntoView({ block: 'start' });

const Sidebar = () => {
  const [isLargerThanMaxContent] = useMediaQuery(`(min-width: ${contentMaxWidth.num + 55}px)`);
  const isSidebarOpen = useSelector(selectIsSidebarOpen);
  const activeAnchor = useSelector(selectActiveAnchor);
  const [previousAnchor, setPreviousAnchor] = useState(activeAnchor);

  if (activeAnchor !== previousAnchor) {
    setPreviousAnchor(activeAnchor);
    scrollToSidebarSection(activeAnchor);
  }

  // using transform instead of top/left so it remains fixed to container, not viewport
  return (
    <Box as="aside">
      <Flex
        direction="column"
        fontSize="sm"
        pt={2}
        px={6}
        pb={16}
        borderRight="1px solid transparent"
        borderColor={useColorModeValue('blackAlpha.400', 'whiteAlpha.400')}
        backgroundColor="var(--chakra-colors-chakra-body-bg)"
        position="fixed"
        transform={[
          'translate(-100%, -1.25rem)',
          'translate(-100%, -1.25rem)',
          `${isLargerThanMaxContent ? 'translate(-1.5rem, -1rem)' : 'translate(0, -1rem)'}`,
        ]}
        transition="transform .5s cubic-bezier(.19,1,.22,1)"
        width={docsSidebarWidth.string}
        height={['100%', '100%', `calc(100% - ${navHeight.string})`]}
        overflowY="auto"
        className="scrollbar-y-thin"
        zIndex="popover"
        style={isSidebarOpen ? openStyle : {}}
      >
        <nav>
          {DocSidebarItems.map((item, i) => {
            const { label, subitems } = item;

            return (
              <UnorderedList
                styleType="none"
                style={{ marginInlineStart: '2px' }}
                key={label}
                mb={7}
                scrollMargin="10px"
              >
                <SidebarHeading label={label} isFirst={i === 0} />
                {subitems?.length &&
                  subitems.map(subitem => <SidebarLink item={subitem} key={subitem.anchor} />)}
              </UnorderedList>
            );
          })}
        </nav>
      </Flex>
    </Box>
  );
};

export default Sidebar;
