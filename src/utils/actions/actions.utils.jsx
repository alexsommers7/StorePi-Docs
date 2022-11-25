export const scrollToAnchor = anchor => {
  document.getElementById(anchor).scrollIntoView({ block: 'start' });
  window.history.pushState({ page: anchor }, document.title, `/docs#${anchor}`);
};
