import { useMemo } from 'react';

import IsBrowser from '@utils/isBrowser';

const usePhaser = (): typeof Phaser => {
  return useMemo(() => {
    if (IsBrowser) {
      return require('phaser');
    }
  }, []);
};

export default usePhaser;
