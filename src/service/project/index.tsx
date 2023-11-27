import { Project, ProjectFilters } from '../../shared/types/project';
import { getQueryParams } from '../../utils';
import { requestService } from '../../utils/requestService';

export const requestGetProjects = async (queryParams?: ProjectFilters) => {
  const url = `http://localhost:8080/projects${getQueryParams(queryParams)}`;
  return requestService(url, {}, {}, false, 'GET');
};

export const requestPutProject = async (
  projectId: number,
  project: Project
) => {
  const url = `http://localhost:8080/projects/${projectId}`;
  return requestService(url, project, {}, false, 'PUT');
};

export const requestPostProject = async (project: Project) => {
  const url = `http://localhost:8080/projects`;
  return requestService(url, project, {}, false, 'POST');
};
