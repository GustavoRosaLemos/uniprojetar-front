import { useCallback } from 'react';
import { requestLogin } from '../../service/user';
import { Login } from '../../shared/types/user';
import { getLocalParam, saveLocalParam } from '../../utils/session';

export const useSession = () => {
  const auth = getLocalParam('session');

  if (!auth) {
    return auth;
  }

  return JSON.parse(auth);
};

export const useGetSession = () =>
  useCallback(async (login: Login) => {
    const auth = await requestLogin(login);
    saveLocalParam('session', JSON.stringify(auth));
  }, []);
