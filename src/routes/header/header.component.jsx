import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { Flex, Text, Box } from '@chakra-ui/react';
import { BorderColor } from '../../utils/color/colorModeValues.utils';

const Header = () => {
  return (
    <Box as="header" borderBottom="1px solid transparent" borderColor={BorderColor}>
      <Flex
        p="8px 32px"
        alignItems="center"
        justifyContent="space-between"
        maxWidth="1400px"
        m="auto"
        fontSize="2xl"
      >
        <Text>StorePi</Text>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
    </Box>
  );
};

export default Header;
