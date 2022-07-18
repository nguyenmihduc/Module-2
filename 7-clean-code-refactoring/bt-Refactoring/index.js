"use strict";
exports.__esModule = true;
var TennisGame_1 = require("./TennisGame");
var game = new TennisGame_1.TennisGame();
game.getScore('player1', 'player2', 1, 2);
console.log(game.score);
