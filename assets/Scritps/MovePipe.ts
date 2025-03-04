import { _decorator, Component, Vec3 } from "cc";
const { ccclass, property } = _decorator;

@ccclass("MovePipe")
export class MovePipe extends Component {
  private speed: number = 100;
  pos: Vec3 = new Vec3();

  deltatime: number = 0;
  start() {}

  update(deltaTime: number) {
    this.deltatime = deltaTime;
    this.moving();
  }

  moving(): void {
    this.pos = this.node.getPosition();
    let posPlayer = 0;
    posPlayer -= this.speed * this.deltatime;
    this.pos.add3f(posPlayer, 0, 0);

    this.node.setPosition(this.pos);
    this.checkPosition();
  }

  checkPosition(): void {
    if (this.node.position.x < -500) {
      this.node.destroy();
    }
  }
}
