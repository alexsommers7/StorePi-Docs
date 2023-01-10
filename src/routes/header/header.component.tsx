import { useDispatch, useSelector } from 'react-redux';
import { selectIsSidebarOpen } from '../../store/docs/docs.selector';
import { setIsSidebarOpen } from '../../store/docs/docs.action';
import {
  Flex,
  Text,
  Box,
  IconButton,
  useMediaQuery,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaBars, FaTimes, FaGithub } from 'react-icons/fa';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { contentMaxWidth, mobileMax } from '../../utils/sizing/sizing.utils';

const Header = () => {
  const dispatch = useDispatch();

  const [isMobile] = useMediaQuery(`(max-width: ${mobileMax})`);
  const isSidebarOpen = useSelector(selectIsSidebarOpen);

  const handleSidebarToggle = () => dispatch(setIsSidebarOpen(!isSidebarOpen));

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
      borderColor={useColorModeValue('blackAlpha.400', 'whiteAlpha.400')}
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
            href="https://github.com/alexsommers7/StorePI"
            aria-label="View project repository on GitHub"
            isExternal
          >
            <FaGithub fontSize={20} />
          </Link>

          <ColorModeSwitcher />

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
