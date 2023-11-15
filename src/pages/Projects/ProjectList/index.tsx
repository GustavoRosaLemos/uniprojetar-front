import { Accordion, Flex } from '@mantine/core';
import InitialScale from '../../../shared/animations/InitialScale';
import ProjectItem from './ProjectItem';
import { Project } from '../../../shared/types/project';

function ProjectList() {
  const itemsMock: Project[] = [
    {
      id: 1,
      nome: 'Projeto A',
      coordenador: 'João Silva',
      valorPrevisto: 50000,
      valorExecutado: 20000,
      valorSaldo: 30000,
      valorTotal: 50000,
      situacao: 'Em andamento',
      anoExercicio: '2023',
      anoInicioEmpenho: '2023',
      anoFinalEmpenho: '2023',
      observacoes:
        'O Projeto A, coordenado por João Silva, está em andamento. O orçamento total é de R$50.000, ' +
        'com R$20.000 já executados. O saldo disponível é de R$30.000. O projeto abrange diversas áreas, ' +
        'como aquisição de materiais de consumo, passagens, serviços terceirizados, e equipamentos. A situação atual ' +
        'é de progresso satisfatório.',
      itens: [
        {
          id: 1,
          projectId: 1,
          nome: 'Material de Consumo',
          valorPrevisto: 8000,
          valorExecutado: 2000,
          valorSaldo: 6000,
        },
        {
          id: 2,
          projectId: 1,
          nome: 'Passagens',
          valorPrevisto: 12000,
          valorExecutado: 5000,
          valorSaldo: 7000,
        },
        {
          id: 3,
          projectId: 1,
          nome: 'Serviços Terceiros P/ Física',
          valorPrevisto: 10000,
          valorExecutado: 3000,
          valorSaldo: 7000,
        },
        {
          id: 4,
          projectId: 1,
          nome: 'Serviços Terceiros P/ Jurídica',
          valorPrevisto: 5000,
          valorExecutado: 2000,
          valorSaldo: 3000,
        },
        {
          id: 5,
          projectId: 1,
          nome: 'Equipamentos e Material',
          valorPrevisto: 15000,
          valorExecutado: 10000,
          valorSaldo: 5000,
        },
      ],
    },
    {
      id: 2,
      nome: 'Projeto B',
      coordenador: 'Maria Oliveira',
      valorPrevisto: 75000,
      valorExecutado: 40000,
      valorSaldo: 35000,
      valorTotal: 75000,
      situacao: 'Concluído',
      observacoes:
        'O Projeto B, liderado por Maria Oliveira, foi concluído com sucesso. O orçamento total foi de R$75.000, ' +
        'com R$40.000 executados. O saldo disponível foi de R$35.000. ' +
        'As atividades incluíram aquisição de materiais, ' +
        'despesas com passagens, contratação de serviços terceirizados, e aquisição de equipamentos. O projeto foi ' +
        'encerrado no ano de exercício de 2022, atingindo os objetivos propostos.',
      anoExercicio: '2022',
      anoInicioEmpenho: '2022',
      anoFinalEmpenho: '2023',
      itens: [
        {
          id: 6,
          projectId: 1,
          nome: 'Material de Consumo',
          valorPrevisto: 6000,
          valorExecutado: 1000,
          valorSaldo: 5000,
        },
        {
          id: 7,
          projectId: 1,
          nome: 'Passagens',
          valorPrevisto: 10000,
          valorExecutado: 4000,
          valorSaldo: 6000,
        },
        {
          id: 8,
          projectId: 1,
          nome: 'Serviços Terceiros P/ Física',
          valorPrevisto: 8000,
          valorExecutado: 2000,
          valorSaldo: 6000,
        },
        {
          id: 9,
          projectId: 1,
          nome: 'Serviços Terceiros P/ Jurídica',
          valorPrevisto: 4000,
          valorExecutado: 1500,
          valorSaldo: 2500,
        },
        {
          id: 10,
          projectId: 1,
          nome: 'Equipamentos e Material',
          valorPrevisto: 12000,
          valorExecutado: 8000,
          valorSaldo: 4000,
        },
      ],
    },
  ];

  return (
    <InitialScale>
      <Flex justify="center" p="lg">
        <Accordion variant="separated">
          {itemsMock.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </Accordion>
      </Flex>
    </InitialScale>
  );
}

export default ProjectList;
