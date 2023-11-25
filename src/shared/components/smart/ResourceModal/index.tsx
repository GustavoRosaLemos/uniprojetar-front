import {
  Button,
  Grid,
  Group,
  Modal,
  NumberInput,
  Stack,
  TextInput,
  Textarea,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import { Resource } from '../../../../shared/types/resource';
import {
  usePostResource,
  usePutResouce,
} from '../../../../store/hooks/resourceHooks';
import Loading from '../../dumb/Loading';

interface NewProjectModalProps {
  opened: boolean;
  close: () => void;
  // eslint-disable-next-line react/require-default-props
  resource?: Resource;
  fetchResources: () => void;
}

function ResourceModal({
  opened,
  close,
  resource,
  fetchResources,
}: NewProjectModalProps) {
  const [isLoading, setLoading] = useState<boolean>();
  const postResource = usePostResource();
  const putResource = usePutResouce();

  const form = useForm({
    initialValues: resource || {
      nome: '',
      descricao: '',
      especificoes: '',
      quantidade: 1,
      valor: 0,
    },
  });

  const { getInputProps, onSubmit, reset } = form;

  const handleClose = () => {
    reset();
    close();
  };

  const handleSubmit = (values: Resource) => {
    if (resource) {
      if (!resource.id) {
        notifications.show({
          title: 'Falha ao editar recurso!',
          message: 'Não foi possível localizar o id do recurso.',
          color: 'red',
        });
        return;
      }
      setLoading(true);
      putResource(resource.id, values)
        .then(() => {
          notifications.show({
            title: 'Recurso',
            message: 'Recurso editado com sucesso!',
            color: 'green',
          });
          close();
          fetchResources();
        })
        .catch(() =>
          notifications.show({
            title: 'Recurso',
            message: 'Falha ao editar recurso!',
            color: 'red',
          })
        )
        .finally(() => setLoading(false));
    } else {
      setLoading(true);
      postResource(values)
        .then(() => {
          notifications.show({
            title: 'Recurso',
            message: 'Recurso adicionado com sucesso!',
            color: 'green',
          });
          close();
          fetchResources();
        })
        .catch(() =>
          notifications.show({
            title: 'Recurso',
            message: 'Falha ao adicionar recurso!',
            color: 'red',
          })
        )
        .finally(() => setLoading(false));
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Modal
      size="xl"
      opened={opened}
      onClose={handleClose}
      title="Novo recurso"
      withCloseButton={false}
    >
      <form onSubmit={onSubmit(handleSubmit)}>
        <Stack>
          <Grid>
            <Grid.Col span="auto">
              <TextInput
                description="Nome do recurso"
                {...getInputProps('nome')}
              />
            </Grid.Col>
            <Grid.Col span={2}>
              <NumberInput
                description="Quantidade"
                min={0}
                max={999999}
                {...getInputProps('quantidade')}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <NumberInput
                hideControls
                thousandSeparator="."
                decimalSeparator=","
                leftSection="R$"
                description="Valor"
                decimalScale={2}
                {...getInputProps('valor')}
              />
            </Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col span="auto">
              <Textarea
                rows={3}
                description="Descrição"
                {...getInputProps('descricao')}
              />
            </Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col span="auto">
              <Textarea
                rows={3}
                description="Especifícações"
                {...getInputProps('especificoes')}
              />
            </Grid.Col>
          </Grid>
          <Group justify="flex-end">
            <Button onClick={handleClose} color="gray">
              Voltar
            </Button>
            <Button type="submit" color="green">
              Salvar
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
}

export default ResourceModal;
