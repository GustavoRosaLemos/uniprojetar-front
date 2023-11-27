export interface Resource {
  id?: number;
  nome: string;
  descricao: string;
  especificoes: string;
  quantidade: number;
  valor: number;
}

export interface ResourceFilters {
  nome?: string;
}
