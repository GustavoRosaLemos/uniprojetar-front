import { Accordion, Flex } from '@mantine/core';
import InitialScale from '../../../shared/animations/InitialScale';
import ProjectItem from './ProjectItem';
import { Project } from '../../../shared/types/project';

interface ProjectListProps {
  // eslint-disable-next-line react/require-default-props
  projects?: Project[];
  fetchProjects: () => void;
}

function ProjectList({ projects, fetchProjects }: ProjectListProps) {
  return (
    <InitialScale>
      <Flex justify="center" p="lg">
        <Accordion variant="separated" w="100vw">
          {projects &&
            projects.map((project) => (
              <ProjectItem
                key={project.id}
                project={project}
                fetchProjects={fetchProjects}
              />
            ))}
        </Accordion>
      </Flex>
    </InitialScale>
  );
}

export default ProjectList;
