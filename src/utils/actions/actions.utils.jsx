export const scrollToAnchor = anchor => {
  document.getElementById(anchor).scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.history.pushState({ page: anchor }, document.title, `/docs#${anchor}`);
};
