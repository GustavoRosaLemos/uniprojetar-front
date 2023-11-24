import { Button, Center, Fieldset, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { Login } from '../../shared/types/user';

function LoginPage() {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email inválido!'),
      password: (value) => (value ? null : 'Senha inválida!'),
    },
  });

  const { getInputProps, onSubmit } = form;

  const handleSubmit = (values: Login) => {
    notifications.show({
      title: 'Login',
      message: 'Login realizado com sucesso!',
      color: 'green',
    });
    console.log(values);
  };

  return (
    <Center w="100vw" h="100vh" bg="var(--mantine-color-gray-light)">
      <Fieldset legend="Login" w={500}>
        <form onSubmit={onSubmit(handleSubmit)}>
          <Stack>
            <TextInput
              description="Email"
              placeholder="Email"
              mt="md"
              {...getInputProps('email')}
            />
            <TextInput
              description="Senha"
              placeholder="Senha"
              {...getInputProps('password')}
            />
            <Button color="green" type="submit">
              Entrar
            </Button>
          </Stack>
        </form>
      </Fieldset>
    </Center>
  );
}

export default LoginPage;
