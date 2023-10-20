import { Accordion, Flex } from '@mantine/core';
import InitialScale from '../../../shared/animations/InitialScale';
import ProjectItem from './ProjectItem';

function ProjectList() {
  const itemsMock = [
    { title: 'Title', description: 'Description' },
    { title: 'Title2', description: 'Description' },
  ];

  return (
    <InitialScale>
      <Flex justify="center" p="lg">
        <Accordion variant="separated">
          {itemsMock.map((project) => (
            <ProjectItem project={project} />
          ))}
        </Accordion>
      </Flex>
    </InitialScale>
  );
}

export default ProjectList;
