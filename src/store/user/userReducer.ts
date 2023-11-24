import { Auth } from '../../shared/types/auth';
import * as userActions from './userAction';

export interface State {
  auth?: Auth;
}

const INITIAL_STATE: State = {
  auth: undefined,
};

export type Actions = userActions.GetUser;

// eslint-disable-next-line default-param-last
export const userReducer = (state = INITIAL_STATE, action: Actions) => {
  switch (action.type) {
    case userActions.GET_USER: {
      const { auth } = action.payload;
      return {
        ...state,
        auth,
      };
    }
    default:
      return state;
  }
};
