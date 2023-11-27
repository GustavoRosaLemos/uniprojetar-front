import { Project, ProjectFilters } from '../../shared/types/project';
import * as projectActions from './projectAction';

interface State {
  projects?: Project[];
  filters?: ProjectFilters;
}

const INITIAL_STATE: State = {
  projects: undefined,
  filters: undefined,
};

export type Actions = projectActions.GetProjects | projectActions.SetFilters;

// eslint-disable-next-line default-param-last
export const projectReducer = (state = INITIAL_STATE, action: Actions) => {
  switch (action.type) {
    case projectActions.GET_PROJECTS: {
      const { projects } = action.payload;
      return {
        ...state,
        projects,
      };
    }
    case projectActions.SET_FILTERS: {
      const { filters } = action.payload;
      return {
        ...state,
        filters,
      };
    }
    default:
      return state;
  }
};
