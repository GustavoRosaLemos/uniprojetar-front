import { Container } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import Header from '../../shared/components/dumb/Header';
import ProjectList from './ProjectList';
import FilterBar from './FilterBar';
import { useGetProjects, useProjects } from '../../store/hooks/projectHooks';
import Loading from '../../shared/components/dumb/Loading';
import { ProjectFilters } from '../../shared/types/project';

function ProjectsPage() {
  const [loading, setLoading] = useState(true);
  const getProjects = useGetProjects();
  const projects = useProjects();

  const fetchProjects = useCallback((filters?: ProjectFilters) => {
    setLoading(true);
    getProjects(filters)
      .then(() => setLoading(false))
      .finally(() => setLoading(false));
  }, []);
  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container fluid p={0}>
      <Header />
      <FilterBar fetchProjects={fetchProjects} />
      <ProjectList projects={projects} fetchProjects={fetchProjects} />
    </Container>
  );
}

export default ProjectsPage;
