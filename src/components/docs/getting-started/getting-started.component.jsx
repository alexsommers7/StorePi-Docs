import { Box, Text, Code } from '@chakra-ui/react';
import { HashLink } from 'react-router-hash-link';
import SectionHeading from '../../section-heading/section-heading.component';
import AnchorHeading from '../../anchor-heading/anchor-heading.component';

const GettingStarted = () => {
  const textMarginBottom = '35px';
  const subheadingMarginBottom = '15px';

  return (
    <Box as="section" pb="15px">
      <SectionHeading text="Introduction" anchorId="introduction" />

      <Text mb={textMarginBottom}>
        StorePI is a free, open-source REST API that was created for use in e-commerce prototyping,
        Front-End Developer talent evaluations, and anything else you can think of.
      </Text>

      <AnchorHeading anchorId="database-interaction-intro" mb={subheadingMarginBottom}>
        Database Interaction
      </AnchorHeading>
      <Text mb={textMarginBottom}>
        All endpoints act as real-world endpoints, but without actually writing anything to the
        database. In the event that you are creating or updating a resource, the response will
        contain the updated data without persisting it.
      </Text>

      <AnchorHeading anchorId="cors-intro" mb={subheadingMarginBottom}>
        CORS
      </AnchorHeading>
      <Text mb={textMarginBottom}>
        Cross-origin resource sharing is enabled for all incoming requests.
      </Text>

      <AnchorHeading anchorId="rate-limiting-intro" mb={subheadingMarginBottom}>
        Rate Limiting
      </AnchorHeading>
      <Text mb={textMarginBottom}>
        The rate limit for a given IP address is 300 requests per hour. The number of requests you
        have remaining can be viewed in the <Code>X-Ratelimit-Remaining</Code> response header of
        any request.
      </Text>

      <AnchorHeading anchorId="authentication-intro" mb={subheadingMarginBottom}>
        Authentication
      </AnchorHeading>
      <Text mb={textMarginBottom}>
        In order to provide a variety in the data, there are 19 user accounts available. You may log
        in as any of the 19 users. The structure of each user's email address is{' '}
        <Code>[firstName]@example.com</Code>, and each user's password is simply{' '}
        <Code>password</Code>. You may log in as any of the following users: Dorothy, Jodi, Shari,
        Jimmy, Daisy, Amy, Candace, Marco, Dustin, Casey, Jean, Cody, Kelly, Phil, Aubrey, Bennie,
        Ramone, Perry, or Tracy. See the{' '}
        <HashLink className="text-anchor-link" to="#authentication" smooth>
          authentication
        </HashLink>{' '}
        section for details.
      </Text>

      <AnchorHeading anchorId="filtering-intro" mb={subheadingMarginBottom}>
        Filtering
      </AnchorHeading>
      <Text mb={textMarginBottom}>Filtering details</Text>

      <AnchorHeading anchorId="sorting-intro" mb={subheadingMarginBottom}>
        Sorting
      </AnchorHeading>
      <Text mb={textMarginBottom}>Sorting details</Text>

      <AnchorHeading anchorId="pagination-intro" mb={subheadingMarginBottom}>
        Pagination
      </AnchorHeading>
      <Text mb={textMarginBottom}>Pagination details</Text>
    </Box>
  );
};

export default GettingStarted;
