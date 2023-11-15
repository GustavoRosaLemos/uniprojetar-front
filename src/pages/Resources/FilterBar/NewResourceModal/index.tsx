import {
  Button,
  Grid,
  Group,
  Modal,
  NumberInput,
  Stack,
  TextInput,
  Textarea,
  Text,
  rem,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Resource } from '../../../../shared/types/resource';

interface NewProjectModalProps {
  opened: boolean;
  close: () => void;
}

function NewResourceModal({ opened, close }: NewProjectModalProps) {
  const form = useForm({
    initialValues: {
      nome: '',
      imagem: '',
      descricao: '',
      especificacoes: '',
      quantidade: 0,
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
              <Dropzone
                onDrop={(files) => console.log('accepted files', files)}
                onReject={(files) => console.log('rejected files', files)}
                maxSize={3 * 1024 ** 2}
                accept={IMAGE_MIME_TYPE}
              >
                <Group
                  justify="center"
                  gap="xl"
                  mih={220}
                  style={{ pointerEvents: 'none' }}
                >
                  <Dropzone.Accept>
                    <IconUpload
                      style={{
                        width: rem(52),
                        height: rem(52),
                        color: 'var(--mantine-color-blue-6)',
                      }}
                      stroke={1.5}
                    />
                  </Dropzone.Accept>
                  <Dropzone.Reject>
                    <IconX
                      style={{
                        width: rem(52),
                        height: rem(52),
                        color: 'var(--mantine-color-red-6)',
                      }}
                      stroke={1.5}
                    />
                  </Dropzone.Reject>
                  <Dropzone.Idle>
                    <IconPhoto
                      style={{
                        width: rem(52),
                        height: rem(52),
                        color: 'var(--mantine-color-dimmed)',
                      }}
                      stroke={1.5}
                    />
                  </Dropzone.Idle>

                  <div>
                    <Text size="xl" inline>
                      Drag images here or click to select files
                    </Text>
                    <Text size="sm" c="dimmed" inline mt={7}>
                      Attach as many files as you like, each file should not
                      exceed 5mb
                    </Text>
                  </div>
                </Group>
              </Dropzone>
            </Grid.Col>
          </Grid>
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
