import { Grid } from '@chakra-ui/react';
import DocSidebar from '../../components/doc-sidebar/sidebar.component';
import DocContent from '../../components/doc-sections/doc-content.component';
import { DocsProvider } from '../../contexts/docs.context';

const Docs = () => {
  return (
    <DocsProvider>
      <Grid
        templateColumns={['1fr', '1fr', 'clamp(200px, 250px, 280px) 1fr']}
        maxWidth="1366px"
        m="auto"
      >
        <DocSidebar />
        <DocContent />
      </Grid>
    </DocsProvider>
  );
};

export default Docs;
