import { Text, Code, UnorderedList, ListItem } from '@chakra-ui/react';
import SectionWrapper from '../../sections/wrapper/section-wrapper.component';
import SectionHeading from '../../sections/heading/section-heading.component';
import AnchorHeading from '../../links/anchor/anchor-heading.component';
import AnchorLink from '../../links/anchor/anchor-link.component';

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

      <AnchorHeading anchorId="filtering-intro">Filtering</AnchorHeading>
      <Text mb={3}>
        If filtering by a brand with multiple words, separate the words with a <Code>-</Code>
      </Text>
      <Text mb={3}>
        If filtering by a category, you must pass in the ID of the category, not the name. The
        category IDs can be obtained via the{' '}
        <AnchorLink anchor="get-categories">categories</AnchorLink> endpoint
      </Text>

      <Text mb={0}>The following parameters are duplicatable:</Text>
      <UnorderedList pl={5} pt={4} mb={6}>
        {[
          'reviews_average',
          'reviews_quantity',
          'regular_price',
          'sale_price',
          'brand',
          'category',
        ].map(item => (
          <ListItem>
            <Code>{item}</Code>
          </ListItem>
        ))}
      </UnorderedList>

      <AnchorHeading anchorId="sorting-intro">Sorting</AnchorHeading>
      <Text>-reviews_average,sale_price</Text>

      <AnchorHeading anchorId="pagination-intro">Pagination</AnchorHeading>
      <Text>Page Param and Limit Param</Text>
    </SectionWrapper>
  );
};

export default GettingStarted;
