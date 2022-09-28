import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { Flex, Text, Box } from '@chakra-ui/react';
import { BorderColor } from '../../utils/color/colorModeValues.utils';

const Header = () => {
  return (
    <Box as="header">
      <Flex
        p="8px 32px"
        alignItems="center"
        justifyContent="space-between"
        maxWidth="1366px"
        m="auto"
        fontSize="2xl"
        position="fixed"
        top="0"
        left="0"
        width="100%"
        borderBottom="1px solid transparent"
        borderColor={BorderColor}
        backgroundColor="var(--chakra-colors-chakra-body-bg)"
      >
        <Text>StorePi</Text>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
    </Box>
  );
};

export default Header;
