import { useRef, useEffect } from 'react';
import * as Phaser from 'phaser';

import usePhaser from '@hooks/usePhaser';

interface GameProps {
  children?: React.ReactNode;
  className?: string;
  config: Phaser.Types.Core.GameConfig;
}

const Game = ({ className = 'relative top-0 left-0 w-full h-full my-0', config }: GameProps) => {
  const parentRef = useRef(null);
  const gameRef = useRef<Phaser.Game>();
  const Phaser = usePhaser();

  useEffect(() => {
    if (Phaser && parentRef.current) {
      const configWithParent = {
        ...config,
        parent: parentRef.current,
      };

      gameRef.current = new Phaser.Game(configWithParent);
    }
    return () => gameRef.current?.destroy(true);
  }, [Phaser, config, parentRef]);

  return Phaser ? <div className={className} ref={parentRef} /> : null;
};

export default Game;
