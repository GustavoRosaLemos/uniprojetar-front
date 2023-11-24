import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { RootState } from '../reducers';
import { requestLogin } from '../../service/user';
import { Login } from '../../shared/types/user';

import * as userAction from '../user/userAction';

const useUserState = () =>
  useSelector((rootState: RootState) => rootState.userState);

export const useLogin = () => useUserState().auth;

export const useGetLogin = () => {
  const dispatch = useDispatch();

  return useCallback(async (login: Login) => {
    const auth = await requestLogin(login);
    dispatch(userAction.getUser(auth));
  }, []);
};
