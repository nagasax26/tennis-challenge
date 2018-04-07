//Create TennisGame Class
var TennisGame = function (player1, player2) {
    this.player1 = player1; //player1 Name
    this.player2 = player2; //Player2 Name
    this.playerOneScore = 0;
    this.playerTwoScore = 0;
};

TennisGame.prototype.playerOneScores = playerOneScores;
TennisGame.prototype.playerTwoScores = playerTwoScores;
TennisGame.prototype.isDeuce = isDeuce;
TennisGame.prototype.playerWithHighestScore = playerWithHighestScore;
TennisGame.prototype.hasWinner = hasWinner;
TennisGame.prototype.hasAdvantage = hasAdvantage;
TennisGame.prototype.translateScore = translateScore;
TennisGame.prototype.getScore = getScore;

//should increase player one's score by one
function playerOneScores() {
    this.playerOneScore++;
}

//should increase player twos's score by one
function playerTwoScores() {
    this.playerTwoScore++;
}

//should return true if the players have the same score that is 3 or above
//should return false if the players don't have the same score, but one is 3 or above
function isDeuce() {
    if (this.playerOneScore === this.playerTwoScore && this.playerOneScore >= 3)
        return true;
    if ((this.playerOneScore >= 3 && this.playerTwoScore < 3) ||
        (this.playerTwoScore >= 3 && this.playerOneScore < 3))
        return true;
    return false;
}

//should return the string of the player with the highest score
function playerWithHighestScore() {
    return this.playerOneScore > this.playerTwoScore ? this.player1 : this.player2;
}

//should return true if someone has won
//should return false if there is no winner
function hasWinner() {
    if (this.hasAdvantage())
        if (this.playerOneScore - this.playerTwoScore > 1)
            return true;
        else
    if (this.playerTwoScore - this.playerOneScore > 1)
        return true;
    return false;
}

//should return true if a player has the advantage
//should return false if a player does no players has the advantage
function hasAdvantage() {
    if (this.isDeuce() || (this.playerOneScore >= 3 || this.playerTwoScore >= 3))
        if (this.playerOneScore > this.playerTwoScore)
            return true;
        else if (this.playerTwoScore > this.playerOneScore)
        return true;
    return false;
}

//should return 'Love' if the score is 0
//should return 'Fifteen' if the score is 1
//should return 'Thirty' if the score is 2
//should return 'Forty' if the score is 3
function translateScore(score) {
    switch (score) {
        case 0:
            return 'Love';
            break;
        case 1:
            return 'Fifteen';
            break;
        case 2:
            return 'Thirty';
            break;
        case 3:
            return 'Forty';
            break;
    }
}

//should return the winner if there is one
//should return the advantage if there is one
//should return the 'Deuce' if there is one
//should return the 'all' if there is a tie
//should return the score if there is no special case
function getScore() {
    if (this.hasWinner())
        return this.playerWithHighestScore() + ' wins';
    if (this.hasAdvantage())
        return 'Advantage ' + this.playerWithHighestScore();
    if(this.isDeuce())
        return 'Deuce';
    if(this.playerOneScore === this.playerTwoScore)
        return this.translateScore(this.playerOneScore) + ' all';
    return this.playerOneScore > this.playerTwoScore ? 
        translateScore(this.playerTwoScore) + ', ' + translateScore(this.playerOneScore) :
        translateScore(this.playerOneScore) + ', ' + translateScore(this.playerTwoScore);
}
