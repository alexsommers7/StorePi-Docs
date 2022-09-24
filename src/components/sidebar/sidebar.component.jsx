import {
  Flex,
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { BorderColor } from '../../utils/color-mode-values/colorModeValues.utils';

const Sidebar = () => {
  return (
    <Flex
      as="aside"
      direction="column"
      fontSize="sm"
      p="32px"
      borderRight="1px solid transparent"
      borderColor={BorderColor}
    >
      <Text>Introduction</Text>

      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Section 1 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default Sidebar;
