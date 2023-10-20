import { Container } from '@mantine/core';
import Header from '../../shared/components/dumb/Header';
import ProjectList from './ProjectList';

function ProjectsPage() {
  return (
    <Container fluid p={0}>
      <Header />
      <ProjectList />
    </Container>
  );
}

export default ProjectsPage;
