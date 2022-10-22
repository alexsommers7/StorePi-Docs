import { useContext, useEffect } from 'react';
import { SidebarContext } from '../../contexts/sidebar.context';
import { Flex, Text, Box, IconButton, useMediaQuery, Link } from '@chakra-ui/react';
import { FaBars, FaTimes, FaGithub } from 'react-icons/fa';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { BorderColor } from '../../utils/color/colorModeValues.utils';
import { contentMaxWidth, mobileMax } from '../../utils/sizing/sizing.utils';

const Header = () => {
  const [isMobile] = useMediaQuery(`(max-width: ${mobileMax})`);
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    console.log('rendering header component');
  });

  const handleSidebarToggle = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <Box
      as="header"
      zIndex="sticky"
      position="fixed"
      fontSize="2xl"
      top="0"
      left="0"
      width="100%"
      borderBottom="1px solid transparent"
      borderColor={BorderColor}
      backgroundColor="var(--chakra-colors-chakra-body-bg)"
      px={6}
      py={2}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        maxWidth={contentMaxWidth.string}
        m="auto"
      >
        <Text mb={0}>StorePi</Text>
        <Flex alignItems="center">
          <Link
            href="https://github.com/alexsommers7/StorePi-Docs"
            aria-label="View project repository on GitHub"
            isExternal
          >
            <FaGithub fontSize={20} />
          </Link>

          <ColorModeSwitcher ml={4} justifySelf="flex-end" />

          {isMobile && (
            <IconButton
              onClick={handleSidebarToggle}
              aria-label={`${isSidebarOpen ? 'Close' : 'Open'} menu`}
              icon={isSidebarOpen ? <FaTimes /> : <FaBars />}
              ml={3}
              variant="solid"
            />
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
