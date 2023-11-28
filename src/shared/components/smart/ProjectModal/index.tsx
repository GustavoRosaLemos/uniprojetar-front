import {
  ActionIcon,
  Button,
  Divider,
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
import { useState } from 'react';
import { notifications } from '@mantine/notifications';
import { useNavigate } from 'react-router';
import { Project, ProjectFilters } from '../../../types/project';
import { getNextTenYearsString } from '../../../../utils';
import { useSession } from '../../../../store/hooks/sessionHooks';
import {
  usePostProject,
  usePutProject,
} from '../../../../store/hooks/projectHooks';
import Loading from '../../dumb/Loading';

interface NewProjectModalProps {
  opened: boolean;
  close: () => void;
  // eslint-disable-next-line react/require-default-props
  project?: Project;
  // eslint-disable-next-line no-unused-vars
  fetchProjects: (filters?: ProjectFilters) => void;
}

function ProjectModal({
  opened,
  close,
  project,
  fetchProjects,
}: NewProjectModalProps) {
  const [loading, setLoading] = useState(false);
  const postProject = usePostProject();
  const putProject = usePutProject();
  const navigate = useNavigate();
  const session = useSession();

  const form = useForm({
    initialValues: project || {
      projeto: '',
      coordenador: {
        firstName: '',
        lastName: '',
        cpf: '',
        email: '',
        passwordHash: '',
        role: '',
        fullName: '',
      },
      valorPrevisto: 0,
      valorExecutado: 0,
      valorSaldo: 0,
      valorTotal: 0,
      situacao: '',
      observacao: '',
      exercicio: 0,
      anoInicioEmpenho: 0,
      anoFimEmpenho: 0,
      itens: [
        {
          nome: '',
          valorPrevisto: 0,
          valorExecutado: 0,
          valorSaldo: 0,
        },
      ],
      resources: [
        { nome: '', descricao: '', especificoes: '', quantidade: 1, valor: 0 },
      ],
    },
  });

  const { getInputProps, onSubmit, values, setFieldValue, reset } = form;

  const handleClose = () => {
    reset();
    close();
  };

  const handleSubmit = () => {
    if (project) {
      if (!project.id) {
        notifications.show({
          title: 'Falha ao editar projeto!',
          message: 'Não foi possível localizar o id do projeto.',
          color: 'red',
        });
        return;
      }
      setLoading(true);
      putProject(project.id, values)
        .then(() => {
          notifications.show({
            title: 'Projeto',
            message: 'Projeto modificado com sucesso!',
            color: 'green',
          });
          handleClose();
          fetchProjects();
        })
        .catch(() =>
          notifications.show({
            title: 'Projeto',
            message: 'Não foi possível modificar o projeto.',
            color: 'red',
          })
        )
        .finally(() => setLoading(false));
    } else {
      if (!session || !session.user) {
        notifications.show({
          title: 'Sessão não encontrada!',
          message: 'Por favor realize login novamente.',
          color: 'red',
        });
        navigate('/login');
        return;
      }
      const {
        cpf,
        email,
        firstName,
        fullName,
        lastName,
        password,
        passwordHash,
        id,
        role,
      } = session.user;
      setLoading(true);
      postProject({
        ...values,
        coordenador: {
          cpf,
          email,
          firstName,
          fullName: fullName ?? '',
          lastName,
          passwordHash: passwordHash ?? '',
          role,
          id,
          password,
        },
      })
        .then(() => {
          notifications.show({
            title: 'Projeto',
            message: 'Projeto criado com sucesso!',
            color: 'green',
          });
          close();
          fetchProjects();
        })
        .catch(() =>
          notifications.show({
            title: 'Projeto',
            message: 'Não foi possível criar o projeto.',
            color: 'red',
          })
        )
        .finally(() => setLoading(false));
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Modal
      size="xl"
      opened={opened}
      onClose={handleClose}
      title="Novo projeto"
      withCloseButton={false}
    >
      <form onSubmit={onSubmit(handleSubmit)}>
        <Stack>
          <Grid>
            <Grid.Col span="auto">
              <TextInput
                description="Nome do Projeto"
                {...getInputProps('projeto')}
              />
            </Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col span="auto">
              <Select
                description="Exercício"
                placeholder="Ano"
                data={getNextTenYearsString()}
                {...getInputProps('exercicio')}
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
                {...getInputProps('anoFimEmpenho')}
              />
            </Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col span="auto">
              <Textarea
                rows={3}
                description="Observações"
                {...getInputProps('observacao')}
              />
            </Grid.Col>
          </Grid>
          <Fieldset legend="Categorias">
            {values.itens.map((item, index) => (
              <Grid key={item.id}>
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
          <Fieldset legend="Recursos">
            {values.resources.map((resource, index) => (
              <Stack mt={20} key={resource.id}>
                {index !== 0 && <Divider my="sm" variant="dashed" />}
                <Grid>
                  <Grid.Col span="auto">
                    <TextInput
                      description="Nome"
                      {...getInputProps(`resources.${index}.nome`)}
                    />
                  </Grid.Col>
                  <Grid.Col span="auto">
                    <TextInput
                      description="especifícações"
                      {...getInputProps(`resources.${index}.especificoes`)}
                    />
                  </Grid.Col>
                </Grid>
                <Grid>
                  <Grid.Col span="auto">
                    <TextInput
                      description="Descrição"
                      {...getInputProps(`resources.${index}.descricao`)}
                    />
                  </Grid.Col>
                </Grid>
                <Grid>
                  <Grid.Col span="auto">
                    <NumberInput
                      description="Quantidade"
                      {...getInputProps(`resources.${index}.quantidade`)}
                      min={1}
                      max={9999}
                    />
                  </Grid.Col>
                  <Grid.Col span="auto">
                    <NumberInput
                      hideControls
                      thousandSeparator="."
                      decimalSeparator=","
                      leftSection="R$"
                      decimalScale={2}
                      description="Valor"
                      {...getInputProps(`resources.${index}.valor`)}
                    />
                  </Grid.Col>
                  <Grid.Col
                    span="content"
                    style={{ display: 'flex', alignItems: 'end' }}
                  >
                    <ActionIcon
                      color="red"
                      size="lg"
                      onClick={() => form.removeListItem('resources', index)}
                    >
                      <IconTrash size="1rem" />
                    </ActionIcon>
                  </Grid.Col>
                </Grid>
              </Stack>
            ))}
            <Group justify="center" mt="md">
              <Button
                variant="outline"
                onClick={() =>
                  form.insertListItem('resources', {
                    nome: '',
                    descricao: '',
                    especificoes: '',
                    quantidade: 1,
                    valor: 0,
                  })
                }
              >
                Adicionar recurso
              </Button>
            </Group>
          </Fieldset>
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

export default ProjectModal;
