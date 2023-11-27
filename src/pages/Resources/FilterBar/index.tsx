import { Button, Grid, Group, Input } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import React from 'react';
import ResourceModal from '../../../shared/components/smart/ResourceModal';
import { useFilters } from '../../../store/hooks/resourceHooks';
import { ResourceFilters } from '../../../shared/types/resource';

interface FilterBarProps {
  // eslint-disable-next-line no-unused-vars
  fetchResources: (filters?: ResourceFilters) => void;
}

function FilterBar({ fetchResources }: FilterBarProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const filters = useFilters();

  const initialValues: ResourceFilters = filters || {
    nome: undefined,
  };

  const form = useForm({ initialValues });

  const { getInputProps, values } = form;

  const handleSubmit = (v: any) => {
    fetchResources(v);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(values);
    }
  };

  return (
    <Grid pl={20} pr={20} pt={10} pb={10} align="end">
      <Grid.Col span="auto">
        <Group>
          <Input.Wrapper description="Recurso">
            <Input
              w={300}
              {...getInputProps('nome')}
              onKeyDown={handleKeyDown}
            />
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
