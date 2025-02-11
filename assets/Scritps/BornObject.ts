import {
  _decorator,
  Component,
  director,
  EventKeyboard,
  Input,
  input,
  instantiate,
  KeyCode,
  Node,
  Prefab,
  randomRange,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("BornObject")
export class BornObject extends Component {
  @property({ type: Prefab })
  pipePrefab: Prefab = null;
  start() {
    this.schedule(this.spawnObject,2,6);
    input.on(Input.EventType.KEY_DOWN,this.onKeyDown,this);

  }

  onKeyDown(EventType: EventKeyboard) {
    if(KeyCode.KEY_S==EventType.keyCode){
        console.log("thu hien input");
        this.spawnObject();
    }
  }
  update(deltaTime: number) {}

  spawnObject(): void {

    let index =Math.floor(randomRange(-20, 200));
    let nodeOjbect = instantiate(this.pipePrefab);
    nodeOjbect.setPosition(this.node.position.x,index,0);
    this.node.addChild(nodeOjbect);
    console.log("nodeOjbect: " + nodeOjbect);
  }
}
