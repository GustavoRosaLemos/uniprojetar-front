import { Resource, ResourceFilters } from '../../shared/types/resource';
import * as resourceActions from './resourceAction';

interface State {
  resources?: Resource[];
  filters?: ResourceFilters;
}

const INITIAL_STATE: State = {
  resources: undefined,
  filters: undefined,
};

export type Actions = resourceActions.GetResources | resourceActions.SetFilters;

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
    case resourceActions.SET_FILTERS: {
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
