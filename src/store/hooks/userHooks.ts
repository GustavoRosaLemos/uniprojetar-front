import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import * as userActions from '../user/userAction';
import { RootState } from '../reducers';
import { requestGetUsers } from '../../service/user';

const useUserState = () =>
  useSelector((rootState: RootState) => rootState.userState);

export const useUsers = () => useUserState().users;

export const useGetUsers = () => {
  const dispatch = useDispatch();

  return useCallback(async () => {
    const result = await requestGetUsers();
    dispatch(userActions.getUsers(result));
  }, [dispatch]);
};
