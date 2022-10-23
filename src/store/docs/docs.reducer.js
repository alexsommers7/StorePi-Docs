import { DOCS_ACTION_TYPES } from './docs.types';
import { DocSidebarItems } from '../../utils/content/doc-sidebar.utils';

const DOCS_INITIAL_STATE = {
  isSidebarOpen: false,
  activeAnchor: DocSidebarItems.filter(item => item.subitems.length)[0].subitems[0].anchor,
};

export const docsReducer = (state = DOCS_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case DOCS_ACTION_TYPES.SET_IS_SIDEBAR_OPEN:
      return {
        ...state,
        isSidebarOpen: payload,
      };

    case DOCS_ACTION_TYPES.SET_ACTIVE_ANCHOR:
      return {
        ...state,
        activeAnchor: payload,
      };

    default:
      return state;
  }
};
