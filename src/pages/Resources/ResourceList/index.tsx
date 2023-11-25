import { Flex, Table } from '@mantine/core';
import InitialScale from '../../../shared/animations/InitialScale';
import ResourceItem from './ResourceItem';
import { Resource } from '../../../shared/types/resource';

interface ResourceListProps {
  // eslint-disable-next-line react/require-default-props
  resources?: Resource[];
  fetchResources: () => void;
}

function ResourceList({ resources, fetchResources }: ResourceListProps) {
  return (
    <InitialScale>
      <Flex justify="center" p="lg">
        <Table highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Recurso</Table.Th>
              <Table.Th>Descrição</Table.Th>
              <Table.Th>Especificações</Table.Th>
              <Table.Th>Valor</Table.Th>
              <Table.Th>Ações</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {resources &&
              resources.map((resource) => (
                <ResourceItem
                  resource={resource}
                  fetchResources={fetchResources}
                />
              ))}
          </Table.Tbody>
        </Table>
      </Flex>
    </InitialScale>
  );
}

export default ResourceList;
