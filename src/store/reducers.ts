import { combineReducers } from 'redux';
import { loadingReducer } from './loading/loadingReducer';
import { projectReducer } from './project/projectReducer';
import { resourceReducer } from './resource/resourceReducer';

const reducers = combineReducers({
  loadingState: loadingReducer,
  projectState: projectReducer,
  resourceState: resourceReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
