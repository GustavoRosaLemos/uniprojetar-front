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
import { Resource, ResourceFilters } from '../../shared/types/resource';

const useResourceState = () =>
  useSelector((rootState: RootState) => rootState.resourceState);

export const useFilters = () => useResourceState().filters;

export const useSetFilters = () => {
  const dispatch = useDispatch();

  return useCallback((filters?: ResourceFilters) => {
    dispatch(resourceActions.setFilters(filters));
  }, []);
};

export const useResources = () => useResourceState().resources;

export const useGetResources = () => {
  const dispatch = useDispatch();

  return useCallback(
    async (filters?: ResourceFilters) => {
      const result = await requestGetResources(filters);
      dispatch(resourceActions.getResources(result));
    },
    [dispatch]
  );
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
