import {
  _decorator,
  Component,
  EventKeyboard,
  Input,
  input,
  KeyCode,
  math,
  RigidBody2D,
  Animation,
  animation,
  AnimationClip,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("Jump")
export class Jump extends Component {
  @property(RigidBody2D)
  characterRB: RigidBody2D = null;
  @property(Animation)
  characterAni: Animation = null;

  @property
  speed: number = 8;

  onLoad() {
    this.characterRB = this.getComponent(RigidBody2D);
    this.characterAni = this.node.getComponent(Animation);
    // this.characterAni.play('birdAni');
  }

  start() {
    input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
  }

  update(deltaTime: number) {}

  onKeyDown(EventType: EventKeyboard) {
    if (KeyCode.SPACE == EventType.keyCode) {
      this.characterRB.applyLinearImpulse(
        new math.Vec2(0, this.speed),
        this.characterRB.getWorldCenter(new math.Vec2()),
        true
      );
    }
  }
}
