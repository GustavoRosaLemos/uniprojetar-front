export interface Login {
  email: string;
  password: string;
}

export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  cpf: string;
  email: string;
  password: string;
  passwordHash?: string;
  role: string;
  fullName?: string;
}
