import { Login } from '../../shared/types/user';
import { requestService } from '../../utils/requestService';

export const requestLogin = async (login: Login) => {
  const url = 'http://localhost:8080/login';

  return requestService(url, login, {}, false, 'POST');
};

export const requestGetUsers = async () => {
  const url = 'http://localhost:8080/users';

  return requestService(url, {}, {});
};
