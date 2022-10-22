import { createContext, useReducer } from 'react';

const initialState = {
  isSidebarOpen: false,
  setIsSidebarOpen: () => {},
};

export const SidebarContext = createContext(initialState);

// reduce possibility of naming errors by referencing this object
export const docsActionTypes = {
  setIsSidebarOpen: 'setIsSidebarOpen',
};

const sidebarReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case docsActionTypes.setIsSidebarOpen:
      return {
        ...state,
        isSidebarOpen: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in sidebarReducer`);
  }
};

export const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sidebarReducer, initialState);
  const { isSidebarOpen } = state;

  const setIsSidebarOpen = bool =>
    dispatch({ type: docsActionTypes.setIsSidebarOpen, payload: bool });

  const value = {
    isSidebarOpen,
    setIsSidebarOpen,
  };

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
};
