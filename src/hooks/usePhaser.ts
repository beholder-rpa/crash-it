import { useMemo } from 'react';

const IsBrowser = typeof window !== 'undefined' && typeof window.navigator !== 'undefined';

const usePhaser = (): typeof Phaser => {
  return useMemo(() => {
    if (IsBrowser) {
      return require('phaser');
    }
  }, []);
};

export default usePhaser;
