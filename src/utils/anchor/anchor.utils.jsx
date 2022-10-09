export const yOffset = -75;

export const scrollWithOffset = el => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};
