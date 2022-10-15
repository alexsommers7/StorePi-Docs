import {
  Code,
  Box,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react';

const CollapsibleCode = ({ label = 'View sample response', code, isOpen = false }) => {
  return (
    <Accordion allowToggle defaultIndex={isOpen ? 0 : null}>
      <AccordionItem>
        <h2>
          <AccordionButton style={{ outline: 'none !important' }}>
            <Box flex="1" textAlign="left">
              {label}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <pre>
            <Code>{code}</Code>
          </pre>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default CollapsibleCode;
