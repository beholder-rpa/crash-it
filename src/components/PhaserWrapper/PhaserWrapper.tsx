import * as React from 'react';
import * as Phaser from 'phaser';

interface GameProps {
  children?: React.ReactNode;
  className?: string;
  config: Phaser.Types.Core.GameConfig;
}

const IsBrowser = typeof window !== 'undefined' && typeof window.navigator !== 'undefined';

const Game = ({ className = 'relative top-0 left-0 w-full h-full my-0', config }: GameProps) => {
  const parentRef = React.useRef(null);
  const gameRef = React.useRef<Phaser.Game>();
  const Phaser = React.useMemo(() => {
    if (IsBrowser) {
      return require('phaser');
    }
  }, []);

  React.useEffect(() => {
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
