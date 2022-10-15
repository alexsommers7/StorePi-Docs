import {
  Code,
  Box,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react';

const CollapsibleCode = ({ code }) => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton style={{ outline: 'none !important' }}>
            <Box flex="1" textAlign="left">
              View sample response
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
