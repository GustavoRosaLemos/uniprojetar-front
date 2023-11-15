import { Container } from '@mantine/core';
import Header from '../../shared/components/dumb/Header';
import ResourceList from './ResourceList';
import FilterBar from './FilterBar';

function ResourcesPage() {
  return (
    <Container fluid p={0}>
      <Header />
      <FilterBar />
      <ResourceList />
    </Container>
  );
}

export default ResourcesPage;
