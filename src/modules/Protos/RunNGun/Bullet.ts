import * as Phaser from 'phaser';

class Bullet extends Phaser.Physics.Arcade.Image {
  speed: number;
  lifespan: number;
  _temp: Phaser.Math.Vector2;

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture);
    this.setBlendMode(1);
    this.setDepth(1);

    this.speed = 800;
    this.lifespan = 1000;

    this._temp = new Phaser.Math.Vector2();
  }

  fire(x: number, y: number, shootAngle: number) {
    this.lifespan = 1000;

    this.setActive(true);
    this.setVisible(true);
    this.setAngle(shootAngle);
    this.setPosition(x, y);

    this.body.reset(x, y);

    this.body.setSize(10, 10, true);

    //const angle = Phaser.Math.DegToRad(shootAngle);

    this.scene.physics.velocityFromRotation(shootAngle, this.speed, this.body.velocity);

    this.body.velocity.x *= 2;
    this.body.velocity.y *= 2;
  }

  update(time: number, delta: number) {
    this.lifespan -= delta;

    if (this.lifespan <= 0) {
      this.kill();
    }
  }

  kill() {
    this.setActive(false);
    this.setVisible(false);
    this.body.stop();
  }
}

export default Bullet;
