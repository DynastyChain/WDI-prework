////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////



function getInput() {
    return prompt("Please choose either rock, paper, or scissors");
    
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

function getPlayerMove(pMove) {
   pMove = getInput();
   if ((pMove != 'rock') && (pMove != 'paper') && (pMove != 'scissors')) { 
       return getInput();
   }
   return pMove;
    }

function getComputerMove(cMove) {
   cMove = randomPlay();
   return cMove;
}
function getWinner(playerMove,computerMove) {
    var computerMove = getComputerMove();
    var playerMove = getPlayerMove();
    var winner;
       if (playerMove === 'rock') {
           if (computerMove === 'rock') {
              winner = "It's a tie";
           }
           else if (computerMove === 'paper') {
              winner = "You lose";
              
           }
           else if (computerMove === 'scissors') {
               winner = "You Win!";
               
           }
       }      
       else if (playerMove === 'paper') {
           if (computerMove === 'rock') {
               winner = "You Win!";
               
           }
           else if (computerMove === 'paper') {
               winner = "It's a tie";
           }
           else if (computerMove === 'scissors') {
               winner = "You lose";
               
           }
       }
       else if (playerMove === 'scissors') {
           if (computerMove === 'rock') {
               winner = "You lose.";
               
           }
           else if (computerMove === 'paper') {
               winner = "You Win!";
               
           }
           else if (computerMove === 'scissors') {
               winner = "It's a tie";
           }
       }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while ((playerWins < 5) && (computerWins < 5)) {
          var roundWinner = getWinner();
          if (roundWinner === 'You Win!') {
              playerWins++;
          }
          else if (roundWinner === 'You lose') {
              computerWins++;
          }              
          alert("W/L" + " " + playerWins + "/" + computerWins);
    }
    return (playerWins + "/" + computerWins);
}
playToFive();



