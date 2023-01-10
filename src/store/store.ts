import { compose, legacy_createStore } from 'redux';
import { rootReducer } from './root-reducer';

export type RootState = ReturnType<typeof rootReducer>;

export const store = legacy_createStore(rootReducer, undefined, compose());
