import { useCallback } from 'react';
import { requestLogin } from '../../service/user';
import { Login } from '../../shared/types/user';
import { getLocalParam, saveLocalParam } from '../../utils/session';
import { Session } from '../../shared/types/auth';

export const useSession = () => {
  const auth = getLocalParam('session');

  if (!auth) {
    return null;
  }

  return JSON.parse(auth) as Session;
};

export const useGetSession = () =>
  useCallback(async (login: Login) => {
    const auth = await requestLogin(login);
    saveLocalParam('session', JSON.stringify(auth));
  }, []);

export const useCheckSession = () =>
  useCallback(async (login: Login) => {
    await requestLogin(login);
  }, []);
