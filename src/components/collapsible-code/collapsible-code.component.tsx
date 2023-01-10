import { useRef } from 'react';
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

interface CollapsibleCodeProps {
  label?: string;
  code: string;
  isOpen?: boolean;
}

const CollapsibleCode = ({ label = 'View sample response', code }: CollapsibleCodeProps) => {
  const codeRef = useRef<HTMLPreElement>(null);

  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton style={{ outline: 'none !important' }}>
            <Box flex="1" textAlign="left">
              {label}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>

        <LazyLoad
          onContentVisible={() => {
            if (codeRef && codeRef.current) {
              Prism.highlightElement(codeRef.current);
            }
          }}
        >
          <AccordionPanel pb={4}>
            <pre>
              <Code ref={codeRef} className="language-javascript">
                {code}
              </Code>
            </pre>
          </AccordionPanel>
        </LazyLoad>
      </AccordionItem>
    </Accordion>
  );
};

export default CollapsibleCode;
