import { Button, Grid, Group, Input } from '@mantine/core';
import { YearPickerInput } from '@mantine/dates';
import { useDisclosure } from '@mantine/hooks';
import ProjectModal from '../../../shared/components/smart/ProjectModal';

interface FilterBarProps {
  fetchProjects: () => void;
}

function FilterBar({ fetchProjects }: FilterBarProps) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Grid pl={20} pr={20} pt={10} pb={10} align="end">
      <Grid.Col span="auto">
        <Group>
          <Input.Wrapper description="Projeto">
            <Input />
          </Input.Wrapper>
          <Input.Wrapper description="Coordenador">
            <Input />
          </Input.Wrapper>
          <Input.Wrapper description="Exercício">
            <Input />
          </Input.Wrapper>
          <YearPickerInput
            type="range"
            description="Empenho"
            w={130}
            clearable
          />
        </Group>
      </Grid.Col>
      <Grid.Col span="content">
        <Button color="green" onClick={() => open()}>
          Novo Projeto
        </Button>
      </Grid.Col>
      <ProjectModal
        opened={opened}
        close={close}
        fetchProjects={fetchProjects}
      />
    </Grid>
  );
}

export default FilterBar;
