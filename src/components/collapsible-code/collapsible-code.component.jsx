import {
  Code,
  Box,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react';
import LazyLoad from 'react-lazy-load';
import Prism from 'prismjs';

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

        <LazyLoad onContentVisible={() => Prism.highlightAll()}>
          <AccordionPanel pb={4}>
            <pre>
              <Code className="language-javascript">{code}</Code>
            </pre>
          </AccordionPanel>
        </LazyLoad>
      </AccordionItem>
    </Accordion>
  );
};

export default CollapsibleCode;
