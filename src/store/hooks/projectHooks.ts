import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { RootState } from '../reducers';
import {
  requestGetProjects,
  requestPostProject,
  requestPutProject,
} from '../../service/project';
import * as projectActions from '../project/projectAction';
import { Project, ProjectFilters } from '../../shared/types/project';

const useProjectState = () =>
  useSelector((rootState: RootState) => rootState.projectState);

export const useProjects = () => useProjectState().projects;

export const useFilters = () => useProjectState().filters;

export const useSetFilters = () => {
  const dispatch = useDispatch();

  return useCallback((filters?: ProjectFilters) => {
    dispatch(projectActions.setFilters(filters));
  }, []);
};

export const useGetProjects = () => {
  const dispatch = useDispatch();

  return useCallback(
    async (filters?: ProjectFilters) => {
      const result = await requestGetProjects(filters);
      dispatch(projectActions.getProjects(result));
    },
    [dispatch]
  );
};

export const useCancelProject = () =>
  useCallback(async (projectId: number, project: Project) => {
    await requestPutProject(projectId, { ...project, situacao: 'Cancelado' });
  }, []);

export const useApproveProject = () =>
  useCallback(async (projectId: number, project: Project) => {
    await requestPutProject(projectId, { ...project, situacao: 'Aprovado' });
  }, []);

export const useContestProject = () =>
  useCallback(async (projectId: number, project: Project) => {
    await requestPutProject(projectId, { ...project, situacao: 'Contestado' });
  }, []);

export const usePutProject = () =>
  useCallback(async (projectId: number, project: Project) => {
    await requestPutProject(projectId, project);
  }, []);

export const usePostProject = () =>
  useCallback(async (project: Project) => {
    await requestPostProject(project);
  }, []);
