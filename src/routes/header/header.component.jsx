import { useContext } from 'react';
import { DocsContext } from '../../contexts/docs.context';
import { Flex, Text, Box, IconButton, useMediaQuery } from '@chakra-ui/react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { BorderColor } from '../../utils/color/colorModeValues.utils';
import { contentMaxWidth, mobileMax } from '../../utils/sizing/sizing.utils';

const Header = () => {
  const [isMobile] = useMediaQuery(`(max-width: ${mobileMax})`);
  const { isSidebarOpen, setIsSidebarOpen } = useContext(DocsContext);

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
        <Flex>
          <ColorModeSwitcher justifySelf="flex-end" />
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
