import { createSelector } from 'reselect';
import { DocsState } from './docs.reducer';
import { RootState } from '../store';

const selectDocsReducer = (state: RootState): DocsState => state.docs;

export const selectActiveAnchor = createSelector([selectDocsReducer], docs => docs.activeAnchor);

export const selectIsSidebarOpen = createSelector([selectDocsReducer], docs => docs.isSidebarOpen);
