import { Button, Grid, Group, Input } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import NewResourceModal from './NewResourceModal';

function FilterBar() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Grid pl={20} pr={20} pt={10} pb={10} align="end">
      <Grid.Col span="auto">
        <Group>
          <Input.Wrapper description="Recurso">
            <Input w={300} />
          </Input.Wrapper>
        </Group>
      </Grid.Col>
      <Grid.Col span="content">
        <Button color="green" onClick={() => open()}>
          Novo Recurso
        </Button>
      </Grid.Col>
      <NewResourceModal opened={opened} close={close} />
    </Grid>
  );
}

export default FilterBar;
