import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { RootState } from '../reducers';
import {
  requestDeleteResource,
  requestGetResources,
  requestPostResource,
  requestPutResource,
} from '../../service/resource';
import * as resourceActions from '../resource/resourceAction';
import { Resource } from '../../shared/types/resource';

const useResourceState = () =>
  useSelector((rootState: RootState) => rootState.resourceState);

export const useResources = () => useResourceState().resources;

export const useGetResources = () => {
  const dispatch = useDispatch();

  return useCallback(async () => {
    const result = await requestGetResources();
    dispatch(resourceActions.getResources(result));
  }, [dispatch]);
};

export const useDeleteResouce = () =>
  useCallback(async (resourceId: number) => {
    await requestDeleteResource(resourceId);
  }, []);

export const usePostResource = () =>
  useCallback(async (resource: Resource) => {
    await requestPostResource(resource);
  }, []);

export const usePutResouce = () =>
  useCallback(async (resourceId: number, resource: Resource) => {
    await requestPutResource(resourceId, resource);
  }, []);
