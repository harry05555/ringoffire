export class Game {
    private _letplayers: String[] = [];
    private _stack: String[] = [];
    private _playedCards: String[] = [];
    private _currentPlayer: number = 0;

    constructor() {
        for (let i = 1; i < 14; i++) {
            this._stack.push('spade_' + i)
            this._stack.push('hearts_' + i)
            this._stack.push('clubs_' + i)
            this._stack.push('diamonds_' + i)
        }

        shuffle(this._stack);
    }
    
    public get letplayers(): String[] {
        return this._letplayers;
    }

    public set letplayers(value: String[]) {
        this._letplayers = value;
    }

    public get stack(): String[] {
        return this._stack;
    }

    public set stack(value: String[]) {
        this._stack = value;
    }

    public get playedCards(): String[] {
        return this._playedCards;
    }

    public set playedCards(value: String[]) {
        this._playedCards = value;
    }

    public get currentPlayer(): number {
        return this._currentPlayer;
    }

    public set currentPlayer(value: number) {
        this._currentPlayer = value;
    }
}

function shuffle(array: String[]) {
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