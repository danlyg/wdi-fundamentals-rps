////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;

    if (playerMove==='rock'){
        if (computerMove==='scissors'){
            winner = 'player';
        }
        else if (computerMove==='paper'){
            winner = 'computer';
        }
        else {
            winner = 'tie';
        }
    }
    else if (playerMove==='scissors'){
        if (computerMove==='rock'){
            winner = 'computer';
        }
        else if (computerMove==='paper'){
            winner = 'player';
        }
        else {
            winner = 'tie';
        }

    }
    else if (playerMove==='paper'){
        if (computerMove==='scissors'){
            winner = 'computer';
        }
        else if (computerMove==='rock'){
            winner = 'player';
        }
        else {
            winner = 'tie';
        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
  
    var winner;
    var playerMove;
    var computerMove;
  
    while ((playerWins < 5) && (computerWins < 5)){
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        winner = getWinner(playerMove,computerMove);
        
        if (winner === 'player'){
            playerWins += 1;
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
            console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
             
        }
        else if (winner === 'computer'){
            computerWins += 1;
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
            console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
        }
        else{
            console.log('Tie play again');
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
            console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
        }
    }
    return [playerWins, computerWins];
}

playToFive();


