import { combineReducers } from 'redux';
import { loadingReducer } from './loading/loadingReducer';
import { userReducer } from './user/userReducer';

const reducers = combineReducers({
  loadingState: loadingReducer,
  userState: userReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
