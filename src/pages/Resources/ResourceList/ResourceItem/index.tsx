import { ActionIcon, Group, Table } from '@mantine/core';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import { Resource } from '../../../../shared/types/resource';
import ResourceModal from '../../../../shared/components/smart/ResourceModal';
import { useDeleteResouce } from '../../../../store/hooks/resourceHooks';
import { currencyBRL } from '../../../../utils';
import Loading from '../../../../shared/components/dumb/Loading';

interface ResourceItemProps {
  resource: Resource;
  fetchResources: () => void;
}

function ResourceItem({ resource, fetchResources }: ResourceItemProps) {
  const [loading, setLoading] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const deleteResource = useDeleteResouce();

  const handleRemoveItem = () => {
    if (!resource.id) {
      notifications.show({
        title: 'Falha ao excluir recurso!',
        message: 'Não foi possível localizar o id do recurso.',
        color: 'green',
      });
      return;
    }

    setLoading(true);
    deleteResource(resource.id)
      .then(() => {
        notifications.show({
          title: 'Recurso',
          message: 'Recurso excluído com sucesso!',
          color: 'green',
        });
        fetchResources();
      })
      .catch(() =>
        notifications.show({
          title: 'Recurso',
          message: 'Falha ao excluir o recurso!',
          color: 'red',
        })
      )
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Table.Tr key={resource.nome + resource.id}>
      <Table.Td>{resource.nome}</Table.Td>
      <Table.Td>{resource.descricao}</Table.Td>
      <Table.Td>{resource.especificoes}</Table.Td>
      <Table.Td>{currencyBRL(resource.valor)}</Table.Td>
      <Table.Td>
        <Group>
          <ActionIcon color="red" size="lg" onClick={handleRemoveItem}>
            <IconTrash size="1rem" />
          </ActionIcon>
          <ActionIcon color="orange" size="lg" onClick={open}>
            <IconEdit size="1rem" />
          </ActionIcon>
        </Group>
      </Table.Td>
      <ResourceModal
        opened={opened}
        close={close}
        resource={resource}
        fetchResources={fetchResources}
      />
    </Table.Tr>
  );
}

export default ResourceItem;
