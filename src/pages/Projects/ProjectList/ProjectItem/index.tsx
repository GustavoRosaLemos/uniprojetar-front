import {
  Accordion,
  Button,
  Divider,
  Flex,
  Grid,
  Group,
  Text,
  Textarea,
} from '@mantine/core';
import { BsFileEarmarkText } from 'react-icons/bs';
import { Project } from '../../../../shared/types/project';
import CustomTable from '../../../../shared/components/custom/CustomTable';
import { currencyBRL } from '../../../../utils';

interface ProjectProps {
  project: Project;
}

function ProjectItem({ project }: ProjectProps) {
  return (
    <Accordion.Item value={project.nome + project.id}>
      <Accordion.Control mr="lg">
        <Group>
          <BsFileEarmarkText size="40" color="BDBDBD" />
          <Flex direction="column">
            <Text c="#BDBDBD" fw="600">
              Projeto / Coordenador
            </Text>
            <Text c="#7A7A7A" fw="bold">
              {project.nome} / Prof. {project.coordenador}
            </Text>
          </Flex>
          <Flex direction="column">
            <Text c="#BDBDBD" fw="600">
              Exercício
            </Text>
            <Text c="#7A7A7A" fw="bold">
              {project.anoExercicio}
            </Text>
          </Flex>
          <Flex direction="column">
            <Text c="#BDBDBD" fw="600">
              Empenho
            </Text>
            <Text c="#7A7A7A" fw="bold">
              {project.anoInicioEmpenho}/{project.anoFinalEmpenho}
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
        <Grid ml={10} mr={10}>
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
              value={project.observacoes}
            />
          </Grid.Col>
        </Grid>
        <Group justify="end" ml={10} mr={10} mt={20}>
          <Button color="red">Cancelar</Button>
          <Button color="gray">Métricas</Button>
          <Button>Ajustar</Button>
          <Button color="green">Aprovar</Button>
        </Group>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export default ProjectItem;
