import { useState, useEffect } from 'react';

/**
 * Subscribe to a CSS media query and re-render when it changes.
 * Replaces reading window.innerWidth directly in render (which never
 * updates on resize/orientation change).
 *
 * @param {string} query - e.g. "(min-width: 768px)"
 * @returns {boolean} whether the query currently matches
 */
const useMediaQuery = (query) => {
  const getMatches = () =>
    typeof window !== 'undefined' && window.matchMedia(query).matches;

  const [matches, setMatches] = useState(getMatches);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);

    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return matches;
};

export default useMediaQuery;
