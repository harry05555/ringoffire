export class Game {
    private _letplayers: string[] = [];
    private _stack: string[] = [];
    private _playedCards: string[] = [];
    private _currentPlayer: number = 0;

    constructor() {
        for (let i = 0; i < 14; i++) {
            this._stack.push('spade_' + i)
            this._stack.push('hearts_' + i)
            this._stack.push('clubs_' + i)
            this._stack.push('diamonds_' + i)
        }

        shuffle(this._stack);
    }
    
    public get letplayers(): string[] {
        return this._letplayers;
    }

    public set letplayers(value: string[]) {
        this._letplayers = value;
    }

    public get stack(): string[] {
        return this._stack;
    }

    public set stack(value: string[]) {
        this._stack = value;
    }

    public get playedCards(): string[] {
        return this._playedCards;
    }

    public set playedCards(value: string[]) {
        this._playedCards = value;
    }

    public get currentPlayer(): number {
        return this._currentPlayer;
    }

    public set currentPlayer(value: number) {
        this._currentPlayer = value;
    }
}

function shuffle(array: string[]) {
    let currentIndex: number = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }