import { createContext, useReducer } from 'react';
import { DocSidebarItems } from '../utils/content/doc-sidebar.utils';

const initialState = {
  activeAnchor: DocSidebarItems.filter(item => item.subitems.length)[0].subitems[0].anchor,
  setActiveAnchor: () => {},
  isSidebarOpen: false,
  setIsSidebarOpen: () => {},
};

export const DocsContext = createContext(initialState);

// reduce possibility of naming errors by referencing this object
export const docsActionTypes = {
  setActiveAnchor: 'setActiveAnchor',
  setIsSidebarOpen: 'setIsSidebarOpen',
};

const docsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case docsActionTypes.setActiveAnchor:
      return {
        ...state,
        activeAnchor: payload,
      };
    case docsActionTypes.setIsSidebarOpen:
      return {
        ...state,
        isSidebarOpen: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in docsReducer`);
  }
};

export const DocsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(docsReducer, initialState);
  const { activeAnchor, isSidebarOpen } = state;

  const setActiveAnchor = anchor =>
    dispatch({ type: docsActionTypes.setActiveAnchor, payload: anchor });

  const setIsSidebarOpen = bool =>
    dispatch({ type: docsActionTypes.setIsSidebarOpen, payload: bool });

  const value = {
    activeAnchor,
    setActiveAnchor,
    isSidebarOpen,
    setIsSidebarOpen,
  };

  return <DocsContext.Provider value={value}>{children}</DocsContext.Provider>;
};
