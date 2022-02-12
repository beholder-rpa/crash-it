import { observer } from 'mobx-react';
import dynamic from 'next/dynamic';

import usePhaser from '@hooks/usePhaser';

const Game = dynamic(() => import('@components/Game'), {
  ssr: false,
});

const CrashIt = () => {
  const Phaser = usePhaser();
  const preload = function (this: Phaser.Scene) {
    console.log('preload ->  preloading assets...', this);
    this.load.setBaseURL('.');
    this.load.image('rain', 'assets/images/thalion-rain.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');

    this.load.audio('theme', ['assets/music/AlexBeroza_-_Drive.mp3']);
  };

  const create = function (this: Phaser.Scene) {
    console.log('create -> creating elements...', this);
    const background = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'rain').setOrigin(0);
    const logo = this.physics.add.image(400, 100, 'logo');
    this.scale.on(
      'resize',
      (gameSize: any) => {
        const width = gameSize.width;
        const height = gameSize.height;

        this.cameras.resize(width, height);

        background.setSize(width, height);
        logo.setPosition(width / 2, height / 2);
      },
      this,
    );

    const particles = this.add.particles('red');

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD',
    });

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);

    const backgroundMusic = (this.sound as Phaser.Sound.HTML5AudioSoundManager).add('theme');
    backgroundMusic.loop = true;
    backgroundMusic.play();
  };

  if (!Phaser) {
    return null;
  }

  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    backgroundColor: '#20134e',
    scale: {
      mode: Phaser.Scale.RESIZE,
    },
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 200 },
      },
    },
    scene: {
      preload,
      create,
    },
    callbacks: {
      preBoot: (game) => console.log('preBoot -> ', game),
      postBoot: (game) => console.log('postBoot -> ', game),
    },
  };

  return <Game config={config} />;
};

export default observer(CrashIt);
