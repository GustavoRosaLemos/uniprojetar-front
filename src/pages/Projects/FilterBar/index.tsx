import { Button, Grid, Group, Input, Select } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import { useForm } from '@mantine/form';
import ProjectModal from '../../../shared/components/smart/ProjectModal';
import { ProjectFilters } from '../../../shared/types/project';
import { getPreviusAndNextTenYearsString } from '../../../utils';
import { PROJECT_STATUS } from '../../../shared/constants/status';
import { useFilters } from '../../../store/hooks/projectHooks';

interface FilterBarProps {
  // eslint-disable-next-line no-unused-vars
  fetchProjects: (filters?: ProjectFilters) => void;
}

function FilterBar({ fetchProjects }: FilterBarProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const filters = useFilters();

  const initialValues: ProjectFilters = filters ?? {
    projeto: '',
    anoInicioEmpenho: undefined,
    anoFimEmpenho: undefined,
    coordenador: '',
    exercicio: undefined,
    situacao: '',
  };

  const form = useForm({
    initialValues,
  });

  const { getInputProps, onSubmit, values, setFieldValue } = form;

  const handleSubmit = (v: any) => {
    fetchProjects(v);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(values);
    }
  };

  return (
    <form onSubmit={onSubmit(handleSubmit)}>
      <Grid pl={20} pr={20} pt={10} pb={10} align="end">
        <Grid.Col span="auto">
          <Group>
            <Input.Wrapper description="Projeto">
              <Input {...getInputProps('projeto')} onKeyDown={handleKeyDown} />
            </Input.Wrapper>
            <Input.Wrapper description="Coordenador">
              <Input
                {...getInputProps('coordenador')}
                onKeyDown={handleKeyDown}
              />
            </Input.Wrapper>
            <Select
              description="Exercício"
              placeholder="Ano"
              clearable
              data={getPreviusAndNextTenYearsString()}
              {...getInputProps('exercicio')}
            />
            <Select
              description="Inicio Empenho"
              placeholder="Ano"
              clearable
              data={getPreviusAndNextTenYearsString()}
              {...getInputProps('anoInicioEmpenho')}
              onChange={(v) => {
                setFieldValue('anoInicioEmpenho', v ?? undefined);
                handleSubmit({ ...values, anoInicioEmpenho: v ?? undefined });
              }}
            />
            <Select
              description="Final Empenho"
              placeholder="Ano"
              clearable
              data={getPreviusAndNextTenYearsString()}
              {...getInputProps('anoFimEmpenho')}
              onChange={(v) => {
                setFieldValue('anoFimEmpenho', v ?? undefined);
                handleSubmit({ ...values, anoFimEmpenho: v ?? undefined });
              }}
            />
            <Select
              description="Status"
              clearable
              data={PROJECT_STATUS.map((s) => s.value)}
              {...getInputProps('situacao')}
              onChange={(v) => {
                setFieldValue('situacao', v ?? undefined);
                handleSubmit({ ...values, situacao: v ?? undefined });
              }}
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
    </form>
  );
}

export default FilterBar;
