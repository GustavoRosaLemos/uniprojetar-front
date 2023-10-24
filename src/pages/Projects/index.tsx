import { Container } from '@mantine/core';
import Header from '../../shared/components/dumb/Header';
import ProjectList from './ProjectList';
import FilterBar from './FilterBar';

function ProjectsPage() {
  return (
    <Container fluid p={0}>
      <Header />
      <FilterBar />
      <ProjectList />
    </Container>
  );
}

export default ProjectsPage;
