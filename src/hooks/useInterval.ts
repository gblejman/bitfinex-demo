import { useEffect } from 'react';

export const useInterval = (fn: () => void, ms: number) => {
  return useEffect(() => {
    const tick = () => {
      fn();
    };

    const id = setInterval(tick, ms);

    return () => clearInterval(id);
  }, [fn, ms]);
};
