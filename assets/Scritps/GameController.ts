import { _decorator, Component, debug, director, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameController')
export class GameController extends Component {
    
    private static score: number = 0;

    @property({type: Label})
    scoreText: Label = null;
    start() {
      
    }

    update(deltaTime: number) {
        
    }

   public gameOver(): void {
        console.log('Game Over');
       // director.pause();
    }

    gameStart(){

    }

    addScore(score: number) {
        GameController.score += score;
        this.scoreText.string = `${GameController.score}`;
    }


}


