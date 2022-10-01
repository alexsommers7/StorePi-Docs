import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { Flex, Text, Box } from '@chakra-ui/react';
import { BorderColor } from '../../utils/color/colorModeValues.utils';

const Header = () => {
  return (
    <Box
      as="header"
      zIndex="sticky"
      position="fixed"
      m="auto"
      maxWidth="1366px"
      fontSize="2xl"
      top="0"
      left="0"
      width="100%"
      borderBottom="1px solid transparent"
      borderColor={BorderColor}
      backgroundColor="var(--chakra-colors-chakra-body-bg)"
      p="8px 32px"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Text mb="0">StorePi</Text>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
    </Box>
  );
};

export default Header;
