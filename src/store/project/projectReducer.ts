import { Project } from '../../shared/types/project';
import * as projectActions from './projectAction';

interface State {
  projects?: Project[];
}

const INITIAL_STATE: State = {
  projects: undefined,
};

export type Actions = projectActions.GetProjects;

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
    default:
      return state;
  }
};
