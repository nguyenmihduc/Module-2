"use strict";
exports.__esModule = true;
exports.TennisGame = void 0;
var TennisGame = /** @class */ (function () {
    function TennisGame(player1Name, player2Name, player1Score, player2Score) {
        this.result = '';
        this.player1Name = player1Name;
        this.player2Name = player2Name;
        this.player1Score = player1Score;
        this.player2Score = player2Score;
    }
    TennisGame.prototype.showResult = function () {
        if (this.player1Score == this.player2Score) {
            return this.tieScore();
        }
        if (this.player1Score >= 4 || this.player2Score >= 4) {
            return this.notTieScore();
        }
        else {
            return this.temporaryScore();
        }
    };
    TennisGame.prototype.tieScore = function () {
        switch (this.player1Score) {
            case 0:
                this.result = "Love-All";
                break;
            case 1:
                this.result = "Fifteen-All";
                break;
            case 2:
                this.result = "Thirty-All";
                break;
            case 3:
                this.result = "Forty-All";
                break;
            default:
                this.result = "Deuce";
                break;
        }
        console.log(this.result);
    };
    TennisGame.prototype.notTieScore = function () {
        var differenceScore = this.player1Score - this.player2Score;
        if (differenceScore == 1) {
            this.result = "Advantage player1";
        }
        else if (differenceScore == -1) {
            this.result = "Advantage player2";
        }
        else if (differenceScore >= 2) {
            this.result = "Win for player1";
        }
        else {
            this.result = "Win for player2";
        }
        console.log(this.result);
    };
    TennisGame.prototype.temporaryScore = function () {
        var temporaryScore = 0;
        if (this.player1Score < 4 && this.player2Score < 4 && this.player1Score !== this.player2Score) {
            for (var i = 1; i < 3; i++) {
                if (i == 1) {
                    temporaryScore = this.player1Score;
                }
                else {
                    this.result += "-";
                    temporaryScore = this.player2Score;
                }
                switch (temporaryScore) {
                    case 0:
                        this.result += "love";
                        break;
                    case 1:
                        this.result += "Fifteen";
                        break;
                    case 2:
                        this.result += "Thirty";
                        break;
                    case 3:
                        this.result += "Forty";
                        break;
                }
            }
        }
        console.log(this.result);
    };
    return TennisGame;
}());
exports.TennisGame = TennisGame;
