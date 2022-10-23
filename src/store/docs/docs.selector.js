import { createSelector } from 'reselect';

const selectDocsReducer = state => state.docs;

export const selectActiveAnchor = createSelector([selectDocsReducer], docs => docs.activeAnchor);

export const selectIsSidebarOpen = createSelector([selectDocsReducer], docs => docs.isSidebarOpen);
