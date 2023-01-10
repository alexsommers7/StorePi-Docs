import { createAction } from '../../utils/reducer/reducer.utils';
import { DOCS_ACTION_TYPES } from './docs.types';

export const setIsSidebarOpen = (bool: boolean) =>
  createAction(DOCS_ACTION_TYPES.SET_IS_SIDEBAR_OPEN, bool);

export const setActiveAnchor = (anchor: string) =>
  createAction(DOCS_ACTION_TYPES.SET_ACTIVE_ANCHOR, anchor);
