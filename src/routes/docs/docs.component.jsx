import { Grid } from '@chakra-ui/react';
import DocSidebar from '../../components/doc-sidebar/sidebar.component';
import DocContent from '../../components/doc-content/doc-content.component';

const Docs = () => {
  return (
    <Grid
      minH="100vh"
      templateColumns={['1fr', '1fr', 'clamp(200px, 250px, 280px) 1fr']}
      maxWidth="1400px"
      m="auto"
    >
      <DocSidebar />
      <DocContent />
    </Grid>
  );
};

export default Docs;
