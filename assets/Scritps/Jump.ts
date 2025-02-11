import { GameController } from './GameController';
import {
  _decorator,
  Component,
  EventKeyboard,
  Input,
  input,
  KeyCode,
  EventMouse,
  math,
  RigidBody2D,
  Animation,
  animation,
  AnimationClip,
  AudioSource,
  AudioClip,
  find,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("Jump")
export class Jump extends Component {
  @property(RigidBody2D)
  characterRB: RigidBody2D = null;
  @property(Animation)
  characterAni: Animation = null;

  gameController: GameController = null;


  @property(AudioClip)
  audioWing: AudioClip = null;
  @property
  speed: number = 8;

  onLoad() {
    if (this.gameController==null)
      this.gameController =find("Game Crtl").getComponent(GameController);
    
    this.characterRB = this.getComponent(RigidBody2D);
    this.characterAni = this.getComponent(Animation);


    // this.characterAni.play('birdAni');
  }

  start() {
    input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this); 
  }

  update(deltaTime: number) {}

  onKeyDown(EventType: EventKeyboard) {
    if (KeyCode.SPACE == EventType.keyCode) {
      this.Jumping();
    }
  }

  onMouseDown(EventType: EventMouse) {
    if(EventType.getButton() == 0){
      this.Jumping();

  }
}
  Jumping() {
    this.characterRB.applyLinearImpulse(
      new math.Vec2(0, this.speed),
      this.characterRB.getWorldCenter(new math.Vec2()),
      true
    );
    this.gameController.audioCrtl.playOneShot(this.audioWing,1);
  }
 

}
