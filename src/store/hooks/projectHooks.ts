import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { RootState } from '../reducers';
import { requestGetProjects, requestPutProject } from '../../service/project';
import * as projectActions from '../project/projectAction';
import { Project } from '../../shared/types/project';

const useProjectState = () =>
  useSelector((rootState: RootState) => rootState.projectState);

export const useProjects = () => useProjectState().projects;

export const useGetProjects = () => {
  const dispatch = useDispatch();

  return useCallback(async () => {
    const result = await requestGetProjects();
    dispatch(projectActions.getProjects(result));
  }, [dispatch]);
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
