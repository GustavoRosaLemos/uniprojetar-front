import { combineReducers } from 'redux';
import { loadingReducer } from './loading/loadingReducer';
import { projectReducer } from './project/projectReducer';

const reducers = combineReducers({
  loadingState: loadingReducer,
  projectState: projectReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
