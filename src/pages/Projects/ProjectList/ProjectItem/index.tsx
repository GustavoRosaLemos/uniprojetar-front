import {
  Accordion,
  Button,
  Divider,
  Flex,
  Grid,
  Group,
  Text,
  Textarea,
  Badge,
  Fieldset,
} from '@mantine/core';
import { BsFileEarmarkText } from 'react-icons/bs';
import { notifications } from '@mantine/notifications';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { Project } from '../../../../shared/types/project';
import CustomTable from '../../../../shared/components/custom/CustomTable';
import { currencyBRL } from '../../../../utils';
import { PROJECT_STATUS } from '../../../../shared/constants/status';
import {
  useApproveProject,
  useCancelProject,
  useContestProject,
} from '../../../../store/hooks/projectHooks';
import ProjectModal from '../../../../shared/components/smart/ProjectModal';
import Loading from '../../../../shared/components/dumb/Loading';

interface ProjectProps {
  project: Project;
  // eslint-disable-next-line no-unused-vars
  fetchProjects: () => void;
}

function ProjectItem({ project, fetchProjects }: ProjectProps) {
  const [loading, setLoading] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const cancelProject = useCancelProject();
  const approveProject = useApproveProject();
  const contestProject = useContestProject();

  const handleCancelProject = () => {
    if (!project.id) {
      notifications.show({
        title: 'Falha ao cancelar projeto!',
        message: 'Não foi possível localizar o id do projeto.',
        color: 'red',
      });
      return;
    }
    setLoading(true);
    cancelProject(project.id, project)
      .then(() => {
        fetchProjects();
        notifications.show({
          title: 'Projeto',
          message: 'Projeto cancelado com sucesso!',
          color: 'green',
        });
      })
      .catch(() =>
        notifications.show({
          title: 'Projeto',
          message: 'Falha ao cancelar projeto!',
          color: 'red',
        })
      )
      .finally(() => setLoading(false));
  };

  const handleApproveProject = () => {
    if (!project.id) {
      notifications.show({
        title: 'Falha ao aprovar projeto!',
        message: 'Não foi possível localizar o id do projeto.',
        color: 'red',
      });
      return;
    }
    setLoading(true);
    approveProject(project.id, project)
      .then(() => {
        fetchProjects();
        notifications.show({
          title: 'Projeto',
          message: 'Projeto aprovado com sucesso!',
          color: 'green',
        });
      })
      .catch(() =>
        notifications.show({
          title: 'Projeto',
          message: 'Falha ao aprovar projeto!',
          color: 'red',
        })
      )
      .finally(() => setLoading(false));
  };

  const handleContestProject = () => {
    if (!project.id) {
      notifications.show({
        title: 'Falha ao constestar o projeto!',
        message: 'Não foi possível localizar o id do projeto.',
        color: 'red',
      });
      return;
    }
    setLoading(true);
    contestProject(project.id, project)
      .then(() => {
        fetchProjects();
        notifications.show({
          title: 'Projeto',
          message: 'Projeto contestado com sucesso!',
          color: 'green',
        });
      })
      .catch(() =>
        notifications.show({
          title: 'Projeto',
          message: 'Falha ao contestar projeto!',
          color: 'red',
        })
      )
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Accordion.Item value={project.projeto + project.id}>
        <Accordion.Control mr="lg">
          <Group>
            <BsFileEarmarkText size="40" color="BDBDBD" />
            <Flex direction="column">
              <Text c="#BDBDBD" fw="600">
                Projeto / Coordenador{' '}
                <Badge
                  color={
                    PROJECT_STATUS.find((v) => v.value === project.situacao)
                      ?.color ?? ''
                  }
                >
                  {project.situacao}
                </Badge>
              </Text>
              <Text c="#7A7A7A" fw="bold">
                {project.projeto} / Prof. {project.coordenador.fullName}
              </Text>
            </Flex>
            <Flex direction="column">
              <Text c="#BDBDBD" fw="600">
                Exercício
              </Text>
              <Text c="#7A7A7A" fw="bold">
                {project.exercicio}
              </Text>
            </Flex>
            <Flex direction="column">
              <Text c="#BDBDBD" fw="600">
                Empenho
              </Text>
              <Text c="#7A7A7A" fw="bold">
                {project.anoInicioEmpenho}/{project.anoFimEmpenho}
              </Text>
            </Flex>
            <Flex direction="column">
              <Text c="#BDBDBD" fw="600">
                Previsto
              </Text>
              <Text c="#7A7A7A" fw="bold">
                {currencyBRL(project.valorPrevisto)}
              </Text>
            </Flex>
            <Flex direction="column">
              <Text c="#BDBDBD" fw="600">
                Executado
              </Text>
              <Text c="#7A7A7A" fw="bold">
                {currencyBRL(project.valorExecutado)}
              </Text>
            </Flex>
            <Flex direction="column">
              <Text c="#BDBDBD" fw="600">
                Saldo
              </Text>
              <Text c="#7A7A7A" fw="bold">
                {currencyBRL(project.valorSaldo)}
              </Text>
            </Flex>
            <Flex direction="column">
              <Text c="#BDBDBD" fw="600">
                Total
              </Text>
              <Text c="#219653" fw="bold">
                {currencyBRL(project.valorTotal)}
              </Text>
            </Flex>
          </Group>
        </Accordion.Control>
        <Accordion.Panel>
          <Divider mb="md" />
          <CustomTable highlightOnHover withRowBorders={false}>
            <CustomTable.Thead>
              <CustomTable.Tr>
                <CustomTable.Th />
                {project.itens.map((item) => (
                  <CustomTable.Th key={`${item.id}${item.nome}`}>
                    {item.nome}
                  </CustomTable.Th>
                ))}
              </CustomTable.Tr>
            </CustomTable.Thead>
            <CustomTable.Tbody>
              <CustomTable.Tr>
                <CustomTable.Td>
                  <Text fw={600} c="#BDBDBD">
                    Previsto
                  </Text>
                </CustomTable.Td>
                {project.itens.map((item) => (
                  <CustomTable.Th key={`${item.id}${item.valorPrevisto}`}>
                    {currencyBRL(item.valorPrevisto)}
                  </CustomTable.Th>
                ))}
              </CustomTable.Tr>
              <CustomTable.Tr>
                <CustomTable.Td>
                  <Text fw={600} c="#BDBDBD">
                    Executado
                  </Text>
                </CustomTable.Td>
                {project.itens.map((item) => (
                  <CustomTable.Th key={`${item.id}${item.valorExecutado}`}>
                    {currencyBRL(item.valorExecutado)}
                  </CustomTable.Th>
                ))}
              </CustomTable.Tr>
              <CustomTable.Tr>
                <CustomTable.Td>
                  <Text fw={600} c="#BDBDBD">
                    Saldo
                  </Text>
                </CustomTable.Td>
                {project.itens.map((item) => (
                  <CustomTable.Th key={`${item.id}${item.valorSaldo}`}>
                    {currencyBRL(item.valorSaldo)}
                  </CustomTable.Th>
                ))}
              </CustomTable.Tr>
            </CustomTable.Tbody>
          </CustomTable>
          <Fieldset legend="Recursos">
            <CustomTable highlightOnHover withRowBorders={false}>
              <CustomTable.Thead>
                <CustomTable.Tr>
                  <CustomTable.Th>Nome</CustomTable.Th>
                  <CustomTable.Th>Descrição</CustomTable.Th>
                  <CustomTable.Th>Especifícações</CustomTable.Th>
                  <CustomTable.Th>Quantidade</CustomTable.Th>
                  <CustomTable.Th>Valor</CustomTable.Th>
                </CustomTable.Tr>
              </CustomTable.Thead>
              <CustomTable.Tbody>
                {project.resources.map((resource) => (
                  <CustomTable.Tr key={resource.id}>
                    <CustomTable.Td>{resource.nome}</CustomTable.Td>
                    <CustomTable.Td>{resource.descricao}</CustomTable.Td>
                    <CustomTable.Td>{resource.especificoes}</CustomTable.Td>
                    <CustomTable.Td>{resource.quantidade}</CustomTable.Td>
                    <CustomTable.Td>
                      {currencyBRL(resource.valor)}
                    </CustomTable.Td>
                  </CustomTable.Tr>
                ))}
              </CustomTable.Tbody>
            </CustomTable>
          </Fieldset>
          <Grid mt={10} ml={10} mr={10}>
            <Grid.Col span="content">
              <Flex gap={9} direction="column">
                <Group justify="space-between">
                  <Text fw={600} c="#BDBDBD">
                    Total Previsto
                  </Text>
                  <Text c="#7a7a7a" ta="right" fw={600}>
                    {currencyBRL(project.valorPrevisto)}
                  </Text>
                </Group>
                <Group justify="space-between">
                  <Text fw={600} c="#BDBDBD">
                    Total Executado
                  </Text>
                  <Text c="#7a7a7a" ta="right" fw={600}>
                    {currencyBRL(project.valorExecutado)}
                  </Text>
                </Group>
                <Group justify="space-between">
                  <Text fw={600} c="#BDBDBD">
                    Saldo Total
                  </Text>
                  <Text c="#7a7a7a" ta="right" fw={600}>
                    {currencyBRL(project.valorTotal)}
                  </Text>
                </Group>
              </Flex>
            </Grid.Col>
            <Grid.Col span="auto">
              <Textarea
                rows={3}
                description="Observações"
                disabled
                value={project.observacao}
              />
            </Grid.Col>
          </Grid>
          <Group justify="end" ml={10} mr={10} mt={20}>
            <Button
              color="red"
              onClick={handleCancelProject}
              disabled={project.situacao === 'Cancelado'}
            >
              Cancelar
            </Button>
            <Button
              color="gray"
              disabled={
                project.situacao === 'Cancelado' ||
                project.situacao === 'Contestado'
              }
              onClick={handleContestProject}
            >
              Contestar
            </Button>
            <Button
              disabled={
                project.situacao === 'Cancelado' ||
                project.situacao === 'Aprovado'
              }
              onClick={open}
            >
              Editar
            </Button>
            <Button
              color="green"
              disabled={
                project.situacao === 'Cancelado' ||
                project.situacao === 'Aprovado'
              }
              onClick={handleApproveProject}
            >
              Aprovar
            </Button>
          </Group>
        </Accordion.Panel>
      </Accordion.Item>
      <ProjectModal
        opened={opened}
        close={close}
        project={project}
        fetchProjects={fetchProjects}
      />
    </>
  );
}

export default ProjectItem;
