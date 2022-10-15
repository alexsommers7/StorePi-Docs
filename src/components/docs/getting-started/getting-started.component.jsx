import {
  Text,
  Code,
  UnorderedList,
  ListItem,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import SectionWrapper from '../../sections/wrapper/section-wrapper.component';
import SectionHeading from '../../sections/heading/section-heading.component';
import AnchorHeading from '../../links/anchor/anchor-heading.component';
import AnchorLink from '../../links/anchor/anchor-link.component';
import { FaLock } from 'react-icons/fa';

const GettingStarted = () => {
  return (
    <SectionWrapper>
      <SectionHeading>Getting Started</SectionHeading>

      <AnchorHeading anchorId="introduction">Introduction</AnchorHeading>
      <Text>
        StorePI is a free, open-source REST API that was created for use in e-commerce prototyping,
        Front-End Developer talent evaluations, and anything else you can think of.
      </Text>

      <AnchorHeading anchorId="database-interaction-intro">Database Interaction</AnchorHeading>
      <Text>
        All endpoints act as real-world endpoints, but without actually writing anything to the
        database. In the event that you are creating or updating a resource, the response will
        contain the updated data without persisting it.
      </Text>

      <AnchorHeading anchorId="cors-intro">CORS</AnchorHeading>
      <Text>Cross-origin resource sharing is enabled for all incoming requests.</Text>

      <AnchorHeading anchorId="rate-limiting-intro">Rate Limiting</AnchorHeading>
      <Text>
        The rate limit for a given IP address is 300 requests per hour. The number of requests you
        have remaining can be viewed in the <Code>X-Ratelimit-Remaining</Code> response header of
        any request.
      </Text>

      <AnchorHeading anchorId="authorization">Authorization</AnchorHeading>
      <Text mb={3}>
        Certain requests require a JWT for authorization. As a general rule, any request that is
        creating, updating, or deleting a resource or accessing a <em>current user's</em> resources
        will require the bearer token. Requests that do require the token are indicated as such by
        the{' '}
        <FaLock
          style={{ display: 'inline-block', transform: 'translateY(1px)' }}
          color="rgb(141, 141, 141)"
          size="12"
        />{' '}
        icon.
      </Text>
      <Text>
        {' '}
        A token can be obtained via the <AnchorLink anchor="log-in">log in</AnchorLink> endpoint,
        where it will be stored as an http-only cookie.
      </Text>

      <AnchorHeading anchorId="request-parameters">Request Parameters</AnchorHeading>
      <Text mb={3}>The following query parameters can optionally be appended to all requests:</Text>
      <TableContainer className="scrollbar-x-thin">
        <Table variant="simple" mb={2}>
          <Thead>
            <Tr>
              <Th>Parameter</Th>
              <Th>Description</Th>
              <Th>Example</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Code>sort</Code>
              </Td>
              <Td>
                <Text mb={2}>Sort the query results by one or more fields (comma-delimited).</Text>{' '}
                Use <Code>-</Code> to indicate descending order.
              </Td>
              <Td>
                <Code>?sort=-reviews_average,sale_price</Code>
              </Td>
            </Tr>

            <Tr>
              <Td>
                <Code>fields</Code>
              </Td>
              <Td>
                <Text mb={2}>Filter the query results to specific fields (comma-delimited).</Text>
                Use <Code>-</Code> to indicate exclusion.
              </Td>
              <Td>
                <Code>?fields=-user</Code>
              </Td>
            </Tr>

            <Tr>
              <Td>
                <Code>limit</Code>
              </Td>
              <Td>
                <Text>Limit the query results.</Text>
              </Td>
              <Td>
                <Code>?limit=10</Code>
              </Td>
            </Tr>

            <Tr>
              <Td>
                <Code>page</Code>
              </Td>
              <Td>
                <Text>Paginate the query results.</Text>
              </Td>
              <Td>
                <Code>?page=2</Code>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      <AnchorHeading anchorId="filtering-intro">Filtering</AnchorHeading>
      <Text mb={3}>Any property of a resource is valid for applying filters to a query.</Text>

      <Text mb={3}>
        If you're filtering by a brand with multiple words, you'll need to separate the words with a{' '}
        <Code>-</Code> e.g. <Code>?brand=brand-name-here</Code>. Supports gte, lte, gt, and lt
        operators e.g. <Code>?sale_price[lte]=100</Code>.
      </Text>

      <Text mb={0}>The following parameters are whitelisted for duplication:</Text>
      <UnorderedList pl={5} pt={4} mb={4}>
        {[
          'reviews_average',
          'reviews_quantity',
          'regular_price',
          'sale_price',
          'brand',
          'category',
        ].map(item => (
          <ListItem key={item}>
            <Code>{item}</Code>
          </ListItem>
        ))}
      </UnorderedList>
    </SectionWrapper>
  );
};

export default GettingStarted;
