import { _decorator, Component, director, EventMouse, Input, input, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("ChangeScene")

export class ChangeScene extends Component {
 
 
    start() {
    input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
  }

  onMouseDown(EventType: EventMouse) {
    if (EventType.getButton() === EventMouse.BUTTON_LEFT) {
         director.loadScene('main');
    }
  }



  update(deltaTime: number) {}
}
