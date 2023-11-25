import { Button, Grid, Group, Input } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ResourceModal from '../../../shared/components/smart/ResourceModal';

interface FilterBarProps {
  fetchResources: () => void;
}

function FilterBar({ fetchResources }: FilterBarProps) {
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
      <ResourceModal
        opened={opened}
        close={close}
        fetchResources={fetchResources}
      />
    </Grid>
  );
}

export default FilterBar;
