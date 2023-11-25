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
import { Resource } from '../../../../shared/types/resource';

interface NewProjectModalProps {
  opened: boolean;
  close: () => void;
}

function NewResourceModal({ opened, close }: NewProjectModalProps) {
  const form = useForm({
    initialValues: {
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

  return (
    <Modal
      size="xl"
      opened={opened}
      onClose={handleClose}
      title="Novo recurso"
      withCloseButton={false}
    >
      <form onSubmit={onSubmit((v: Resource) => console.log(v))}>
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
                {...getInputProps('especificacoes')}
              />
            </Grid.Col>
          </Grid>
          <Group justify="flex-end">
            <Button onClick={handleClose} color="gray">
              Voltar
            </Button>
            <Button type="submit" color="green">
              Cadastrar recurso
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
}

export default NewResourceModal;
