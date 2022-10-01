import { Box, Text, Code } from '@chakra-ui/react';
import SectionHeading from '../../section-heading/section-heading.component';
import AnchorHeading from '../../anchor-heading/anchor-heading.component';
import AnchorLink from '../../anchor-link/anchor-link.component';

const GettingStarted = () => {
  return (
    <Box as="section" pb="15px">
      <SectionHeading text="Introduction" anchorId="introduction" />

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

      <AnchorHeading anchorId="authentication-intro">Authentication</AnchorHeading>
      <Text>
        In order to provide a variety in the data, there are 19 user accounts available. You may log
        in as any of the 19 users. The structure of each user's email address is{' '}
        <Code>[firstName]@example.com</Code>, and each user's password is simply{' '}
        <Code>password</Code>. You may log in as any of the following users: Dorothy, Jodi, Shari,
        Jimmy, Daisy, Amy, Candace, Marco, Dustin, Casey, Jean, Cody, Kelly, Phil, Aubrey, Bennie,
        Ramone, Perry, or Tracy. See the{' '}
        <AnchorLink anchor="authentication">authentication</AnchorLink> section for details.
      </Text>

      <AnchorHeading anchorId="filtering-intro">Filtering</AnchorHeading>
      <Text>Filtering details</Text>

      <AnchorHeading anchorId="sorting-intro">Sorting</AnchorHeading>
      <Text>Sorting details</Text>

      <AnchorHeading anchorId="pagination-intro">Pagination</AnchorHeading>
      <Text>Pagination details</Text>
    </Box>
  );
};

export default GettingStarted;
