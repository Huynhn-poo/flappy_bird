import {
  _decorator,
  AudioSource,
  Component,
  debug,
  director,
  game,
  Label,
  Node,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("GameController")
export class GameController extends Component {
  private static score: number = 0;

  @property({ type: Label })
  scoreText: Label = null;

  @property({ type: Label })
  scoreGameOverText: Label = null;

  @property({ type: Node })
  gameOverSprite: Node = null;

  @property(AudioSource)
  public audioCrtl: AudioSource = null;
  protected onLoad(): void {
    this.audioCrtl = this.getComponent(AudioSource);
  }
  start() {}

  update(deltaTime: number) {}

  public gameOver(): void {
    console.log("Game Over");
    director.pause();
    this.gameOverSprite.active = true;
  }

  gameStart() {}

  public ChangetoMenu(): void {
    GameController.score = 0;
    director.loadScene("menu");
    director.resume();
  }
  
  addScore(score: number) {
    GameController.score += score;
    this.scoreText.string = `${GameController.score}`;
    this.scoreGameOverText.string = `${GameController.score}`;
  }
}
