import { Box, Text, Code, Heading } from '@chakra-ui/react';
import { HashLink } from 'react-router-hash-link';
import SectionHeading from '../../section-heading/section-heading.component';

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

      <Heading size="md" mb={subheadingMarginBottom}>
        Database Interaction
      </Heading>
      <Text mb={textMarginBottom}>
        All endpoints act as real-world endpoints, but without actually writing anything to the
        database. In the event that you are creating or updating a resource, the response will
        contain the updated data without persisting it.
      </Text>

      <Heading size="md" mb={subheadingMarginBottom}>
        CORS
      </Heading>
      <Text mb={textMarginBottom}>
        Cross-origin resource sharing is enabled for all incoming requests.
      </Text>

      <Heading size="md" mb={subheadingMarginBottom}>
        Rate Limiting
      </Heading>
      <Text mb={textMarginBottom}>
        The rate limit for a given IP address is 300 requests per hour. The number of requests you
        have remaining can be viewed in the <Code>X-Ratelimit-Remaining</Code> response header of
        any request.
      </Text>

      <Heading size="md" mb={subheadingMarginBottom}>
        Authentication
      </Heading>
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
    </Box>
  );
};

export default GettingStarted;
