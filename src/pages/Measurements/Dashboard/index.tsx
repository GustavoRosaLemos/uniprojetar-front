import { Group } from '@mantine/core';
import { useEffect } from 'react';
import DashData from '../../../shared/components/smart/DashData';
import { useGetProjects, useProjects } from '../../../store/hooks/projectHooks';
import {
  useGetResources,
  useResources,
} from '../../../store/hooks/resourceHooks';
import InitialScale from '../../../shared/animations/InitialScale';
import { useGetUsers, useUsers } from '../../../store/hooks/userHooks';
import ProjectsCharts from './ProjectsChart';
import ValuesChart from './ValuesChart';

function Dashboard() {
  const getProject = useGetProjects();
  const getResources = useGetResources();
  const getUsers = useGetUsers();
  const projects = useProjects();
  const resources = useResources();
  const users = useUsers();

  useEffect(() => {
    getProject();
    getResources();
    getUsers();
  }, []);
  return (
    <InitialScale>
      <Group p={20} w="100vw" justify="center" grow gap="xl">
        <DashData
          title="Total de Projetos"
          value={projects?.length.toString() ?? '-'}
        />
        <DashData
          title="Total de Recursos"
          value={resources?.length.toString() ?? '-'}
        />
        <DashData
          title="Total de Usuários"
          value={users?.length.toString() ?? '-'}
        />
      </Group>
      <Group p={20} w="100vw" justify="center" grow gap="xl">
        <ProjectsCharts />
        <ValuesChart />
      </Group>
    </InitialScale>
  );
}

export default Dashboard;
