import { Project } from '../../shared/types/project';

export const GET_PROJECTS = 'GET_PROJECTS';

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
