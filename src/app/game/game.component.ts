import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardAnimation: boolean = false;
  game!: Game;
  curentCard?: String;
  /* card?: String;
 */
  constructor() {
    this.pickCardAnimation = false;
  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.pickCardAnimation = true;
      this.curentCard = this.game.stack.pop() as String;
      
      console.log(this.curentCard + " etwas da nach");
      console.log(this.game);
      
      setTimeout(() => {
        this.pickCardAnimation = false;
        this.game.playedCards.push(this.curentCard as String);
      }, 1000);
    }
  }
}
