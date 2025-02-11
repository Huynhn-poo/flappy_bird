import { GameController } from "./GameController";
import {
  _decorator,
  Collider2D,
  Component,
  Node,
  Contact2DType,
  IPhysics2DContact,
  find,
  ICollisionEvent,
  PhysicsSystem2D,
  AudioClip,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("ClashObject")
export class ClashObject extends Component {
  @property({ type: GameController })
  private gameController: GameController = null;

  @property({ type: AudioClip })
  audioDie: AudioClip = null;
  @property({ type: AudioClip })
  audioScore: AudioClip = null;

  protected onLoad(): void {
    if (this.gameController == null)
      this.gameController = find("Game Crtl").getComponent(GameController);
  }
  start() {
    const collider = this.getComponent(Collider2D);
    if (collider) {
      console.log("Collider: " + collider.enabled);
      collider.on(Contact2DType.BEGIN_CONTACT, this.onCollisionEnter, this);
    }
  }

  update(deltaTime: number) {}

  onCollisionEnter(
    selfCollider: Collider2D,
    otherCollider: Collider2D,
    contact: IPhysics2DContact | null
  ) {
    console.log(
      "Collision detected between " +
        selfCollider.node.name +
        " and " +
        otherCollider.group
    );

    if (otherCollider.group === 2) {
      console.log("GameController: " + this.gameController);
      this.gameController.audioCrtl.playOneShot(this.audioDie, 1);
      this.gameController.gameOver();
    } else if (otherCollider.group === 4 && this.gameController != null) {
      this.gameController.audioCrtl.playOneShot(this.audioScore, 1);
      this.gameController.addScore(1);
    }
  }
}
