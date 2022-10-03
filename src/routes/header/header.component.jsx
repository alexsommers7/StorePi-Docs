import { Flex, Text, Box, IconButton, useMediaQuery } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { BorderColor } from '../../utils/color/colorModeValues.utils';
import { contentMaxWidth } from '../../utils/sizing/sizing.utils';

const Header = () => {
  const [isMobile] = useMediaQuery('(max-width: 47.935em)');

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
      p="8px 32px"
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
          {isMobile && <IconButton aria-label="Open menu" icon={<FaBars />} ml={3} />}
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
