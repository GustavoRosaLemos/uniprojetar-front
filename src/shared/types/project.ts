export interface Project {
  id?: number;
  nome: string;
  coordenador: string;
  valorPrevisto: number;
  valorExecutado: number;
  valorSaldo: number;
  valorTotal: number;
  situacao: string;
  anoExercicio: string;
  anoInicioEmpenho: string;
  anoFinalEmpenho: string;
  observacoes: string;
  itens: ProjectItem[];
}

export interface ProjectItem {
  id?: number;
  projectId?: number;
  nome: string;
  valorPrevisto: number;
  valorExecutado: number;
  valorSaldo: number;
}
