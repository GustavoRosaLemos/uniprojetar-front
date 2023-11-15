import {
  ActionIcon,
  Button,
  Fieldset,
  Grid,
  Group,
  Modal,
  NumberInput,
  Select,
  Stack,
  TextInput,
  Textarea,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconTrash } from '@tabler/icons-react';
import { Project } from '../../../../shared/types/project';
import { getNextTenYearsString } from '../../../../utils';

interface NewProjectModalProps {
  opened: boolean;
  close: () => void;
}

function NewProjectModal({ opened, close }: NewProjectModalProps) {
  const form = useForm({
    initialValues: {
      nome: '',
      coordenador: '',
      valorPrevisto: 0,
      valorExecutado: 0,
      valorSaldo: 0,
      valorTotal: 0,
      situacao: '',
      observacoes: '',
      anoExercicio: '',
      anoInicioEmpenho: '',
      anoFinalEmpenho: '',
      itens: [
        {
          nome: '',
          valorPrevisto: 0,
          valorExecutado: 0,
          valorSaldo: 0,
        },
      ],
    },
  });

  const { getInputProps, onSubmit, values, setFieldValue, reset } = form;

  const handleClose = () => {
    reset();
    close();
  };

  return (
    <Modal
      size="xl"
      opened={opened}
      onClose={handleClose}
      title="Novo projeto"
      withCloseButton={false}
    >
      <form onSubmit={onSubmit((v: Project) => console.log(v))}>
        <Stack>
          <Grid>
            <Grid.Col span="auto">
              <TextInput
                description="Nome do Projeto"
                {...getInputProps('nome')}
              />
            </Grid.Col>
            <Grid.Col span="auto">
              <TextInput
                description="Coordenador"
                {...getInputProps('coordenador')}
              />
            </Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col span="auto">
              <Select
                description="Exercício"
                placeholder="Ano"
                data={getNextTenYearsString()}
                {...getInputProps('anoExercicio')}
              />
            </Grid.Col>
            <Grid.Col span="auto">
              <Select
                description="Inicio Empenho"
                placeholder="Ano"
                data={getNextTenYearsString()}
                {...getInputProps('anoInicioEmpenho')}
              />
            </Grid.Col>
            <Grid.Col span="auto">
              <Select
                description="Final Empenho"
                placeholder="Ano"
                data={getNextTenYearsString()}
                {...getInputProps('anoFinalEmpenho')}
              />
            </Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col span="auto">
              <Textarea
                rows={3}
                description="Observações"
                {...getInputProps('observacoes')}
              />
            </Grid.Col>
          </Grid>
          <Fieldset legend="Categorias">
            {values.itens.map((item, index) => (
              <Grid>
                <Grid.Col span="auto">
                  <TextInput
                    description="Nome"
                    {...getInputProps(`itens.${index}.nome`)}
                  />
                </Grid.Col>
                <Grid.Col span="auto">
                  <NumberInput
                    hideControls
                    thousandSeparator="."
                    decimalSeparator=","
                    leftSection="R$"
                    description="Previsto"
                    decimalScale={2}
                    {...getInputProps(`itens.${index}.valorPrevisto`)}
                    onChange={(v) => {
                      setFieldValue(`itens.${index}.valorPrevisto`, v);
                      setFieldValue(
                        `itens.${index}.valorSaldo`,
                        Number(v) - values.itens[index].valorExecutado
                      );
                    }}
                  />
                </Grid.Col>
                <Grid.Col span="auto">
                  <NumberInput
                    hideControls
                    thousandSeparator="."
                    decimalSeparator=","
                    leftSection="R$"
                    description="Executado"
                    decimalScale={2}
                    {...getInputProps(`itens.${index}.valorExecutado`)}
                    onChange={(v) => {
                      setFieldValue(`itens.${index}.valorExecutado`, v);
                      setFieldValue(
                        `itens.${index}.valorSaldo`,
                        values.itens[index].valorPrevisto - Number(v)
                      );
                    }}
                  />
                </Grid.Col>
                <Grid.Col span="auto">
                  <NumberInput
                    hideControls
                    thousandSeparator="."
                    decimalSeparator=","
                    leftSection="R$"
                    decimalScale={2}
                    disabled
                    description="Saldo"
                    {...getInputProps(`itens.${index}.valorSaldo`)}
                  />
                </Grid.Col>
                <Grid.Col
                  span="content"
                  style={{ display: 'flex', alignItems: 'end' }}
                >
                  <ActionIcon
                    color="red"
                    size="lg"
                    onClick={() => form.removeListItem('itens', index)}
                  >
                    <IconTrash size="1rem" />
                  </ActionIcon>
                </Grid.Col>
              </Grid>
            ))}
            <Group justify="center" mt="md">
              <Button
                variant="outline"
                onClick={() =>
                  form.insertListItem('itens', {
                    nome: '',
                    valorPrevisto: 0,
                    valorExecutado: 0,
                    valorSaldo: 0,
                  })
                }
              >
                Adicionar categoria
              </Button>
            </Group>
          </Fieldset>
          <Group justify="flex-end">
            <Button onClick={handleClose} color="gray">
              Voltar
            </Button>
            <Button type="submit" color="green">
              Criar Projeto
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
}

export default NewProjectModal;
