import { ActionIcon, Flex, Image, List, Table, Text } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';
import InitialScale from '../../../shared/animations/InitialScale';
import ExampleImage from '../../../shared/images/example-image.png';

function ResourceList() {
  return (
    <InitialScale>
      <Flex justify="center" p="lg">
        <Table highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Recurso</Table.Th>
              <Table.Th>Descrição</Table.Th>
              <Table.Th>Especificações</Table.Th>
              <Table.Th>Quantidade</Table.Th>
              <Table.Th>Valor</Table.Th>
              <Table.Th>Ações</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td>
                <Flex align="center">
                  <Image
                    radius="md"
                    h={100}
                    w="auto"
                    fit="contain"
                    src={ExampleImage}
                  />
                  <Text ml={10}>Camera Fotográfica</Text>
                </Flex>
              </Table.Td>
              <Table.Td>Camera fotográfica profissional</Table.Td>
              <Table.Td>
                <List>
                  <List.Item>Display de 2.7</List.Item>
                  <List.Item>Modo de auto-foco</List.Item>
                  <List.Item>Conecta-se por: Wi-Fi, NFC</List.Item>
                  <List.Item>Possui flash integrado</List.Item>
                </List>
              </Table.Td>
              <Table.Td>10</Table.Td>
              <Table.Td>R$ 2.415</Table.Td>
              <Table.Td>
                <ActionIcon
                  color="red"
                  size="lg"
                  onClick={() => console.log('Excluido!')}
                >
                  <IconTrash size="1rem" />
                </ActionIcon>
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Flex>
    </InitialScale>
  );
}

export default ResourceList;
