import {
  Container,
  Flex,
  Group,
  Paper,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useSession } from '../../store/hooks/sessionHooks';
import Header from '../../shared/components/dumb/Header';
import InitialScale from '../../shared/animations/InitialScale';

function UserPage() {
  const session = useSession();

  return (
    <Container p={0} fluid>
      <Header />
      <Flex justify="center" p={20}>
        <InitialScale>
          <Paper shadow="xl" w={600} p="xl">
            <Stack>
              <Text fw={600} c="#BDBDBD">
                Perfil
              </Text>
              <Group grow>
                <TextInput
                  description="Nome"
                  disabled
                  value={session?.user.firstName ?? ''}
                />
                <TextInput
                  description="Sobrenome"
                  disabled
                  value={session?.user.lastName ?? ''}
                />
              </Group>
              <Group grow>
                <TextInput
                  description="Email"
                  disabled
                  type="email"
                  value={session?.user.email ?? ''}
                />
                <TextInput
                  description="Cargo"
                  disabled
                  value={session?.user.role ?? ''}
                />
              </Group>
            </Stack>
          </Paper>
        </InitialScale>
      </Flex>
    </Container>
  );
}

export default UserPage;
