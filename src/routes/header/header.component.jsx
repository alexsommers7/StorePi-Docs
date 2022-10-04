import { useContext } from 'react';
import { DocsContext } from '../../contexts/docs.context';
import { Flex, Text, Box, IconButton, useMediaQuery } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
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
      p={['.5rem 1.5rem', '.5rem 1.5rem ', '.5rem 1.5rem']}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        maxWidth={contentMaxWidth.string}
        m="auto"
      >
        <Text mb={0}>StorePi</Text>
        <Box>
          <ColorModeSwitcher justifySelf="flex-end" />
          {isMobile && (
            <IconButton
              onClick={handleSidebarToggle}
              aria-label="Open menu"
              icon={<FaBars />}
              ml={3}
            />
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
