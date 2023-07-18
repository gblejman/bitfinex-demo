import { useEffect } from 'react';

export const useInterval = (fn: () => void, ms: number, deps: unknown[] = []) => {
  return useEffect(() => {
    const tick = () => {
      fn();
    };

    const unsubscribe = setInterval(tick, ms);

    return () => clearInterval(unsubscribe);
  }, deps);
};
