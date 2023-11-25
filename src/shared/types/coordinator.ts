export interface Coordinator {
  id?: number;
  firstName: string;
  lastName: string;
  cpf: string;
  email: string;
  passwordHash: string;
  password?: null | string;
  role: string;
  fullName: string;
}
