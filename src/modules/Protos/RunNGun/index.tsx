import { observer } from 'mobx-react';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

import usePhaser from '@hooks/usePhaser';
import IsBrowser from '@utils/isBrowser';

import type Bullet from './Bullet';

const Game = dynamic(() => import('@components/Game'), {
  ssr: false,
});

const RunNGun = () => {
  const Phaser = usePhaser();
  const Bullet = useBullet();
  const preload = function (this: Phaser.Scene) {
    console.log('preload ->  preloading assets...', this);
    this.load.setBaseURL('.');
    this.load.image('sky', 'assets/backgrounds/lightblue.png');
    this.load.image('elephant', 'assets/sprites/elephant.png');

    this.load.audio('start', ['assets/sounds/Voice - I buy that for a dollar!.wav']);
    this.load.audio('pew', ['assets/sounds/pew.mp3']);
    this.load.audio('bingo', ['assets/sounds/Voice - Bingo!.wav']);
  };

  let gamepad: Phaser.Input.Gamepad.Gamepad;
  let sprite: Phaser.GameObjects.Image;

  let pewSound: Phaser.Sound.HTML5AudioSound;
  let bingoSound: Phaser.Sound.HTML5AudioSound;

  let bullets: Phaser.Physics.Arcade.Group;
  let lastFired = 0;
  let lastBingo = 0;

  const create = function (this: Phaser.Scene) {
    this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'sky').setOrigin(0);

    const text = this.add.text(10, 10, 'Press a button on the Gamepad to use', {
      font: '16px Courier',
      color: '#00ff00',
    });

    this.input.gamepad.once(
      'down',
      function (
        this: Phaser.Scene,
        pad: Phaser.Input.Gamepad.Gamepad,
        _button: Phaser.Input.Gamepad.Button,
        _index: number,
      ) {
        startSound.play();
        text.setText('Playing with ' + pad.id);

        const width = this.scale.width;
        const height = this.scale.height;

        gamepad = pad;

        sprite = this.add.image(width / 2, height / 2, 'elephant');
        lastBingo = this.time.now + 2000;
      },
      this,
    );

    const startSound = (this.sound as Phaser.Sound.HTML5AudioSoundManager).add('start');
    pewSound = (this.sound as Phaser.Sound.HTML5AudioSoundManager).add('pew');
    bingoSound = (this.sound as Phaser.Sound.HTML5AudioSoundManager).add('bingo');

    bullets = this.physics.add.group({
      classType: Bullet,
      maxSize: 30,
      runChildUpdate: true,
    });
  };

  const update = function (this: Phaser.Scene, time: number, _delta: number) {
    if (!gamepad || !sprite) {
      return;
    }

    if (gamepad.leftStick) {
      sprite.x += gamepad.leftStick.x * 6;
      sprite.y += gamepad.leftStick.y * 6;
      if (gamepad.leftStick.x < 0) {
        sprite.flipX = false;
      } else if (gamepad.leftStick.x > 0) {
        sprite.flipX = true;
      }
    }

    if (gamepad.rightStick) {
      if ((gamepad.rightStick.x != 0 || gamepad.rightStick.y != 0) && time > lastFired) {
        const bullet = bullets.get();
        if (bullet) {
          bullet.fire(sprite.x, sprite.y, gamepad.rightStick.angle());
          pewSound.play();
          lastFired = time + 500;
        }
      }
    }

    if (gamepad.A && time > lastBingo) {
      bingoSound.play();
      lastBingo = time + 500;
    }
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
    input: {
      gamepad: true,
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
      update: update as () => void,
    },
    callbacks: {
      preBoot: (game) => console.log('preBoot -> ', game),
      postBoot: (game) => console.log('postBoot -> ', game),
    },
  };

  return <Game config={config} />;
};

export default observer(RunNGun);

const useBullet = (): typeof Bullet | undefined => {
  return useMemo(() => {
    if (IsBrowser) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('./Bullet').default;
    }
  }, []);
};
