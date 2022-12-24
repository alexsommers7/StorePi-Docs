const setWindowHistory = anchor => {
  window.history.pushState(
    { page: anchor },
    document.title,
    `${window.location.pathname}#${anchor}`
  );
};

export const scrollToAnchorById = anchor => {
  document.getElementById(anchor)?.scrollIntoView({ block: 'start' });
  setWindowHistory(anchor);
};
