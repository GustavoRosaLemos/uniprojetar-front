import { Resource } from '../../shared/types/resource';
import { requestService } from '../../utils/requestService';

export const requestGetResources = async () => {
  const url = 'http://localhost:8080/recurso';
  return requestService(url, {}, {});
};

export const requestDeleteResource = async (resourceId: number) => {
  const url = `http://localhost:8080/recurso/${resourceId}`;
  return requestService(url, {}, {}, false, 'DELETE');
};

export const requestPostResource = async (resource: Resource) => {
  const url = `http://localhost:8080/recurso`;
  return requestService(url, resource, {}, false, 'POST');
};

export const requestPutResource = async (
  resourceId: number,
  resource: Resource
) => {
  const url = `http://localhost:8080/recurso/${resourceId}`;
  return requestService(url, resource, {}, false, 'PUT');
};
