import { Resource, ResourceFilters } from '../../shared/types/resource';

export const GET_RESOURCES = 'GET_RESOURCES';
export const SET_FILTERS = 'SET_FILTERS';

export const getResources = (resources: Resource[]) => ({
  type: GET_RESOURCES,
  payload: {
    resources,
  },
});

export interface GetResources {
  type: typeof GET_RESOURCES;
  payload: {
    resources: Resource[];
  };
}

export const setFilters = (filters?: ResourceFilters) => ({
  type: SET_FILTERS,
  payload: {
    filters,
  },
});

export interface SetFilters {
  type: typeof SET_FILTERS;
  payload: {
    filters: ResourceFilters | undefined;
  };
}
