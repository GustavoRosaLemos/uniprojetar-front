import { Coordinator } from './coordinator';
import { Resource } from './resource';

export interface Project {
  id?: number;
  projeto: string;
  coordenador: Coordinator;
  valorPrevisto: number;
  valorExecutado: number;
  valorSaldo: number;
  valorTotal: number;
  situacao: string;
  observacao: string;
  exercicio: number;
  anoInicioEmpenho: number;
  anoFimEmpenho: number;
  itens: ProjectItem[];
  resources: Resource[];
}

export interface ProjectFilters {
  projeto?: string;
  anoFimEmpenho?: string;
  coordenador?: string;
  anoInicioEmpenho?: string;
  exercicio?: string;
  situacao?: string;
}

export interface ProjectItem {
  id?: number;
  projectId?: number;
  nome: string;
  valorPrevisto: number;
  valorExecutado: number;
  valorSaldo: number;
}
