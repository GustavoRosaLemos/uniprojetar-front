import { Accordion, Flex } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import InitialScale from '../../../shared/animations/InitialScale';
import ProjectItem from './ProjectItem';
import { useGetProjects, useProjects } from '../../../store/hooks/projectHooks';
import Loading from '../../../shared/components/loading';

function ProjectList() {
  const [loading, setLoading] = useState(true);
  const getProjects = useGetProjects();
  const projects = useProjects();

  const fetchProjects = useCallback(() => {
    getProjects()
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
    <InitialScale>
      <Flex justify="center" p="lg">
        <Accordion variant="separated">
          {projects &&
            projects.map((project) => (
              <ProjectItem
                key={project.id}
                project={project}
                setLoading={setLoading}
                fetchProjects={fetchProjects}
              />
            ))}
        </Accordion>
      </Flex>
    </InitialScale>
  );
}

export default ProjectList;
