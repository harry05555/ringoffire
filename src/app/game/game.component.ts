import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  private _pickCardAnimation: boolean = false;
  private _game!: Game;
  private _curentCard!: string;
  private names: string[] = [];

  constructor(public dialog: MatDialog) {
    this.pickCardAnimation = false;
  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.pickCardAnimation = true;
      this.curentCard = this.game.stack.pop() as string;
      this._game.currentPlayer++;
      this._game.currentPlayer = this._game.currentPlayer % this._game.letplayers.length;
      setTimeout(() => {
        this.pickCardAnimation = false;
        this.game.playedCards.push(this.curentCard);
      }, 1000);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent, {
    });

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0) {
        this.names.push(name);
        this.game.letplayers = this.names;
      }
    });
  }
  public get curentCard(): string {
    return this._curentCard;
  }
  public set curentCard(value: string) {
    this._curentCard = value;
  }

  public get game(): Game {
    return this._game;
  }
  public set game(value: Game) {
    this._game = value;
  }
  public get pickCardAnimation(): boolean {
    return this._pickCardAnimation;
  }
  public set pickCardAnimation(value: boolean) {
    this._pickCardAnimation = value;
  }
}