import { User } from './user';

export interface Auth {
  accessToken: string;
  user: User;
  tokenType: string;
}
