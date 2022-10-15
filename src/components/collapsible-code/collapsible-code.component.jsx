import { useEffect } from 'react';
import {
  Code,
  Box,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react';
import Prism from 'prismjs';

const CollapsibleCode = ({ label = 'View sample response', code, isOpen = false }) => {
  useEffect(() => {
    Prism.highlightAll();
  });

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
            <Code className="language-javascript">{code}</Code>
          </pre>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default CollapsibleCode;
