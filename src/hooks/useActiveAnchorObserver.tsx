import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveAnchor } from '../store/docs/docs.action';

const observerOptions = {
  root: null,
  rootMargin: '0px 0px -80% 0px',
  threshold: 0,
};

// TODO - pass event handler to make hook more generic once useEffectEvent is no longer experimental
// https://beta.reactjs.org/learn/reusing-logic-with-custom-hooks#passing-event-handlers-to-custom-hooks
export function useActiveAnchorObserver(node: HTMLElement | null, anchorId: string) {
  const dispatch = useDispatch();

  useEffect(() => {
    const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      // prevent from setting anchor on initial render
      if (entry && entry.isIntersecting && entry.intersectionRatio > 0) {
        dispatch(setActiveAnchor(anchorId));
      }
    };

    const observer = new IntersectionObserver(intersectionCallback, observerOptions);

    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [dispatch, node, anchorId]);
}
