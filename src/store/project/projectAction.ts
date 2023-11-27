import { Project, ProjectFilters } from '../../shared/types/project';

export const GET_PROJECTS = 'GET_PROJECTS';
export const SET_FILTERS = 'SET_FILTERS';

export const getProjects = (projects: Project[]) => ({
  type: GET_PROJECTS,
  payload: {
    projects,
  },
});

export interface GetProjects {
  type: typeof GET_PROJECTS;
  payload: {
    projects: Project[];
  };
}

export const setFilters = (filters?: ProjectFilters) => ({
  type: SET_FILTERS,
  payload: {
    filters,
  },
});

export interface SetFilters {
  type: typeof SET_FILTERS;
  payload: {
    filters: ProjectFilters | undefined;
  };
}
