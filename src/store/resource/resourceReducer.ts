import { Resource } from '../../shared/types/resource';
import * as resourceActions from './resourceAction';

interface State {
  resources?: Resource[];
}

const INITIAL_STATE: State = {
  resources: undefined,
};

export type Actions = resourceActions.GetResources;

// eslint-disable-next-line default-param-last
export const resourceReducer = (state = INITIAL_STATE, action: Actions) => {
  switch (action.type) {
    case resourceActions.GET_RESOURCES: {
      const { resources } = action.payload;
      return {
        ...state,
        resources,
      };
    }

    default:
      return state;
  }
};
