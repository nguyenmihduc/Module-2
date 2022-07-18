import {TennisGame} from "./TennisGame";

let game = new TennisGame();
game.getScore('player1', 'player2', 1, 2);
console.log(game.score)