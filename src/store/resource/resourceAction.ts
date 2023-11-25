import { Resource } from '../../shared/types/resource';

export const GET_RESOURCES = 'GET_RESOURCES';

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
