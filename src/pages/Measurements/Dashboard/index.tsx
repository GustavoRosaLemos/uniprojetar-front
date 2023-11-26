import { Group } from '@mantine/core';
import { useEffect } from 'react';
import DashData from '../../../shared/components/smart/DashData';
import { useGetProjects, useProjects } from '../../../store/hooks/projectHooks';
import {
  useGetResources,
  useResources,
} from '../../../store/hooks/resourceHooks';
import InitialScale from '../../../shared/animations/InitialScale';

function Dashboard() {
  const getProject = useGetProjects();
  const getResources = useGetResources();
  const projects = useProjects();
  const resources = useResources();
  useEffect(() => {
    getProject();
    getResources();
  }, []);
  return (
    <InitialScale>
      <Group p={20} w="100vw" justify="center" grow gap="xl">
        <DashData title="Projetos" value={projects?.length.toString() ?? ''} />
        <DashData title="Recursos" value={resources?.length.toString() ?? ''} />
      </Group>
    </InitialScale>
  );
}

export default Dashboard;
