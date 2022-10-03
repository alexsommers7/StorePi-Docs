import { createContext, useReducer } from 'react';
import { DocSidebarItems } from '../utils/content/doc-sidebar.utils';

const initialState = {
  activeAnchor: DocSidebarItems.filter(item => item.subitems.length)[0].subitems[0].anchor,
  setActiveAnchor: () => {},
};

export const DocsContext = createContext(initialState);

// reduce possibility of naming errors by referencing this object
export const docsActionTypes = {
  setActiveAnchor: 'setActiveAnchor',
};

const docsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case docsActionTypes.setActiveAnchor:
      return {
        ...state,
        activeAnchor: payload,
      };

    default:
      throw new Error(`Unhandled type ${type} in docsReducer`);
  }
};

export const DocsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(docsReducer, initialState);
  const { activeAnchor } = state;

  const setActiveAnchor = anchor => {
    dispatch({ type: docsActionTypes.setActiveAnchor, payload: anchor });
  };

  const value = {
    activeAnchor,
    setActiveAnchor,
  };

  return <DocsContext.Provider value={value}>{children}</DocsContext.Provider>;
};
