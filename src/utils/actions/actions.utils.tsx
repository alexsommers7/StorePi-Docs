const setWindowHistory = (anchor: string): void => {
  window.history.pushState(
    { page: anchor },
    document.title,
    `${window.location.pathname}#${anchor}`
  );
};

export const scrollToAnchorById = (anchor: string): void => {
  document.getElementById(anchor)?.scrollIntoView({ block: 'start' });
  setWindowHistory(anchor);
};
