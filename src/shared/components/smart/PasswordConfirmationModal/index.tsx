import { Button, Group, Modal, PasswordInput, Stack } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import {
  useCheckSession,
  useSession,
} from '../../../../store/hooks/sessionHooks';
import { Login } from '../../../types/user';
import Loading from '../../dumb/Loading';

interface PasswordConfirmationModalProps {
  opened: boolean;
  close: () => void;
  handleConfirm: () => void;
}

function PasswordConfirmationModal({
  opened,
  close,
  handleConfirm,
}: PasswordConfirmationModalProps) {
  const [loading, setLoading] = useState(false);
  const checkSession = useCheckSession();
  const session = useSession();

  const form = useForm({
    initialValues: {
      email: session?.user.email ?? '',
      password: '',
    },
    validate: {
      password: isNotEmpty('Senha obrigatória!'),
    },
  });

  const { reset, onSubmit, getInputProps } = form;

  const handleSubmit = (values: Login) => {
    setLoading(true);
    checkSession(values)
      .then(() => {
        notifications.show({
          title: 'Confirmação de senha',
          message: 'Senha confirmada com sucesso!',
          color: 'green',
        });
        handleConfirm();
        handleClose();
      })
      .catch(() =>
        notifications.show({
          title: 'Confirmação de senha',
          message: 'Falha ao confirmar senha!',
          color: 'red',
        })
      )
      .finally(() => setLoading(false));
  };

  const handleClose = () => {
    reset();
    close();
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Modal
      size="xl"
      opened={opened}
      onClose={handleClose}
      title="Confirme com sua senha para continuar"
      withCloseButton={false}
    >
      <form onSubmit={onSubmit(handleSubmit)}>
        <Stack>
          <PasswordInput description="Senha" {...getInputProps('password')} />
          <Group justify="end">
            <Button onClick={handleClose} color="red">
              Voltar
            </Button>
            <Button type="submit" color="green">
              Confirmar
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
}

export default PasswordConfirmationModal;
