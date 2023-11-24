import { Auth } from '../../shared/types/auth';

export const GET_USER = 'GET_USER';

export const getUser = (auth: Auth) => ({
  type: GET_USER,
  payload: {
    auth,
  },
});

export interface GetUser {
  type: typeof GET_USER;
  payload: {
    auth: Auth;
  };
}
