import * as React from 'react';
import * as Phaser from 'phaser';

import { useLayoutEffect } from '@hooks/useIsomorphicLayoutEffect';

import styles from './Game.module.css';

interface GameProps {
  children?: React.ReactNode;
  className?: string;
}

const Game = ({ className = 'relative top-0 left-0 w-full h-full my-0' }: GameProps) => {
  const parentRef = React.useRef(null);
  const gameRef = React.useRef<Phaser.Game>();
  const Phaser = React.useMemo(() => {
    if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
      return require('phaser');
    }
  }, []);

  const preload = React.useCallback(() => {
    const g = gameRef.current;
    if (!g) {
      throw new Error('Game not initialized');
    }

    const _this = g.scene.keys.default;
    console.log('preload ->  preloading assets...', _this);
    _this.load.setBaseURL('.');
    _this.load.image('rain', 'assets/images/thalion-rain.png');
    _this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    _this.load.image('red', 'assets/particles/red.png');

    _this.load.audio('theme', ['assets/music/AlexBeroza_-_Drive.mp3']);
  }, []);

  const create = React.useCallback((_) => {
    const g = gameRef.current;
    if (!g) {
      throw new Error('Game not initialized');
    }

    const _this: any = g.scene.keys.default;
    console.log('create -> creating elements...', _this);
    _this.bg = _this.add.tileSprite(0, 0, _this.scale.width, _this.scale.height, 'rain').setOrigin(0);
    _this.scale.on(
      'resize',
      (gameSize: any) => {
        const width = gameSize.width;
        const height = gameSize.height;

        _this.cameras.resize(width, height);

        _this.bg.setSize(width, height);
        _this.logo.setPosition(width / 2, height / 2);
      },
      _this,
    );

    const particles = _this.add.particles('red');

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD',
    });

    const logo = _this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);
    _this.logo = logo;

    emitter.startFollow(logo);

    const backgroundMusic = _this.sound.add('theme');
    backgroundMusic.loop = true;
    backgroundMusic.play();
  }, []);

  useLayoutEffect(() => {
    let g: Phaser.Game;
    if (Phaser && parentRef.current) {
      const config: Phaser.Types.Core.GameConfig = {
        type: Phaser.AUTO,
        backgroundColor: '#20134e',
        scale: {
          mode: Phaser.Scale.RESIZE,
        },
        parent: parentRef.current,
        physics: {
          default: 'arcade',
          arcade: {
            gravity: { y: 200 },
          },
        },
        scene: {
          preload: () => preload(),
          create: (e: any) => create(e),
        },
        // callbacks: {
        //   preBoot: (game) => console.log('preBoot -> ', game),
        //   postBoot: (game) => console.log('postBoot -> ', game),
        // }
      };
      g = gameRef.current = new Phaser.Game(config);
      console.log('game', gameRef.current);
    }
    return () => g.destroy(true);
  }, [Phaser, create, preload, parentRef]);

  return Phaser ? <div className={`${styles.game} ${className}`} ref={parentRef} /> : null;
};

export default Game;
