import { combineReducers } from 'redux';
import { docsReducer } from './docs/docs.reducer';

export const rootReducer = combineReducers({
  docs: docsReducer,
});
