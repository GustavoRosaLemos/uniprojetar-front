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

interface ProjectProps {
  project: Project;
}

function ProjectItem({ project }: ProjectProps) {
  return (
    <Accordion.Item value={project.title}>
      <Accordion.Control mr="lg">
        <Group>
          <BsFileEarmarkText size="40" color="BDBDBD" />
          <Flex direction="column">
            <Text c="#BDBDBD" fw="600">
              Projeto / Coordenador
            </Text>
            <Text c="#7A7A7A" fw="bold">
              Projeto A / Prof. Fulano de Tal
            </Text>
          </Flex>
          <Flex direction="column">
            <Text c="#BDBDBD" fw="600">
              Exercício
            </Text>
            <Text c="#7A7A7A" fw="bold">
              2023
            </Text>
          </Flex>
          <Flex direction="column">
            <Text c="#BDBDBD" fw="600">
              Empenho
            </Text>
            <Text c="#7A7A7A" fw="bold">
              xxxx/2023
            </Text>
          </Flex>
          <Flex direction="column">
            <Text c="#BDBDBD" fw="600">
              Previsto
            </Text>
            <Text c="#7A7A7A" fw="bold">
              R$ 3.645,00
            </Text>
          </Flex>
          <Flex direction="column">
            <Text c="#BDBDBD" fw="600">
              Executado
            </Text>
            <Text c="#7A7A7A" fw="bold">
              R$ 3.645,00
            </Text>
          </Flex>
          <Flex direction="column">
            <Text c="#BDBDBD" fw="600">
              Saldo
            </Text>
            <Text c="#7A7A7A" fw="bold">
              R$ 0,00
            </Text>
          </Flex>
          <Flex direction="column">
            <Text c="#BDBDBD" fw="600">
              Total
            </Text>
            <Text c="#219653" fw="bold">
              R$ 11.355,00
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
              <CustomTable.Th>Material de Consumo</CustomTable.Th>
              <CustomTable.Th>Passagens</CustomTable.Th>
              <CustomTable.Th>Serviços Terceiros P/ Física</CustomTable.Th>
              <CustomTable.Th>Serviços Terceiros P/ Jurídica</CustomTable.Th>
              <CustomTable.Th>Equipamentos e Material</CustomTable.Th>
            </CustomTable.Tr>
          </CustomTable.Thead>
          <CustomTable.Tbody>
            <CustomTable.Tr>
              <CustomTable.Td>
                <Text fw={600} c="#BDBDBD">
                  Previsto
                </Text>
              </CustomTable.Td>
              <CustomTable.Td>R$ 3.645,00</CustomTable.Td>
              <CustomTable.Td>R$ 2.000,00</CustomTable.Td>
              <CustomTable.Td>R$ 2.355,00</CustomTable.Td>
              <CustomTable.Td>R$ 4.000,00</CustomTable.Td>
              <CustomTable.Td>R$ 3.000,00</CustomTable.Td>
            </CustomTable.Tr>
            <CustomTable.Tr>
              <CustomTable.Td>
                <Text fw={600} c="#BDBDBD">
                  Executado
                </Text>
              </CustomTable.Td>
              <CustomTable.Td>R$ 3.645,00</CustomTable.Td>
              <CustomTable.Td>R$ 2.000,00</CustomTable.Td>
              <CustomTable.Td>R$ 2.355,00</CustomTable.Td>
              <CustomTable.Td>R$ 4.000,00</CustomTable.Td>
              <CustomTable.Td>R$ 3.000,00</CustomTable.Td>
            </CustomTable.Tr>
            <CustomTable.Tr>
              <CustomTable.Td>
                <Text fw={600} c="#BDBDBD">
                  Saldo
                </Text>
              </CustomTable.Td>
              <CustomTable.Td>R$ 3.645,00</CustomTable.Td>
              <CustomTable.Td>R$ 2.000,00</CustomTable.Td>
              <CustomTable.Td>R$ 2.355,00</CustomTable.Td>
              <CustomTable.Td>R$ 4.000,00</CustomTable.Td>
              <CustomTable.Td>R$ 3.000,00</CustomTable.Td>
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
                  R$ 15.000,00
                </Text>
              </Group>
              <Group justify="space-between">
                <Text fw={600} c="#BDBDBD">
                  Total Executado
                </Text>
                <Text c="#7a7a7a" ta="right" fw={600}>
                  R$ 3.645,00
                </Text>
              </Group>
              <Group justify="space-between">
                <Text fw={600} c="#BDBDBD">
                  Saldo Total
                </Text>
                <Text c="#7a7a7a" ta="right" fw={600}>
                  R$ 3.645,00
                </Text>
              </Group>
            </Flex>
          </Grid.Col>
          <Grid.Col span="auto">
            <Textarea
              rows={3}
              description="Observações"
              disabled
              value="Em 2023 foi realizada uma troca de rubrica. 
              Transferidos R$ 3.645,00 de serviços de pessoa física para material de consumo, 
              para pagamento dos 150 doffees breaks para capacitação de professores da rede municipal de Ibirama."
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
