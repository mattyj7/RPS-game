const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const outcome = document.getElementById("outcome");
const computerOptions = ["Rock", "Paper", "Scissors"];
const computersChoice = document.getElementById("computersChoice");
const playersChoice = document.getElementById("playersChoice")
const battle = document.getElementById("battle");
const input = document.getElementById("input");
const playAgainButton = document.getElementById('playAgainButton');

// BUTTONS
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const options = document.querySelectorAll("#rock, #paper, #scissors");

let scorePlayer = 0;
let scoreComputer = 0;
let computChoice = " ";
let inputGames = 5;

// functions

function addPointPlayer() {
    scorePlayer++
    playerScore.innerHTML = scorePlayer;
}

function addPointComputer() {
  scoreComputer++
  computerScore.innerHTML = scoreComputer;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function getComputersChoice() {
    computChoice = computerOptions[getRndInteger(0, 2)];
    computersChoice.innerHTML = computChoice;
    return computChoice;
    
}

function changeColor (x, y, z) { 
  x.style.backgroundColor = "lightblue";
  y.style.backgroundColor = "lightgrey";
  z.style.backgroundColor = "lightgrey";
}

function print () {
  console.log(computChoice);
}

function showPlayAgainButton() {
  playAgainButton.style.display = 'block';
}

function myBlurFunction() {
  input.style.backgroundColor = ""; 
  inputGames = document.querySelector("input").value;
  return inputGames
}

function resetGame() {
  playAgainButton.style.display = 'none';
  outcome.innerHTML = "...";
  scoreComputer = 0;
  computerScore.innerHTML = scoreComputer;
  scorePlayer = 0;
  playerScore.innerHTML = scorePlayer;
}

function round () {
  let playChoice = playersChoice.innerHTML;
  console.log(inputGames);
  if(((inputGames + 1)/2) === scorePlayer) {
    outcome.innerHTML = "Congratulations! You have WON!";
    showPlayAgainButton();
  }
  else if(((inputGames + 1)/2) === scoreComputer) {
    outcome.innerHTML = "Unlucky! You have lost!";
    showPlayAgainButton();
  }
  else if(scorePlayer < inputGames) {
    if(playChoice === "Rock" && computChoice === "Scissors") {
      outcome.innerHTML = "Rock beats Scissors. You Win!";
      addPointPlayer();
    }
    else if(playChoice === "Paper" && computChoice === "Rock") {
      outcome.innerHTML = "Paper beats Rock. You Win!";
      addPointPlayer();
    }
    else if(playChoice === "Scissors" && computChoice === "Paper") {
      outcome.innerHTML = "Scissors beats Paper. You Win!";
      addPointPlayer();
    }
    if(computChoice === "Rock" && playChoice === "Scissors") {
      outcome.innerHTML = "Scissors are destoryed by Rocks. You lose";
      addPointComputer();
    }
    else if(computChoice === "Paper" && playChoice === "Rock") {
      outcome.innerHTML = "Rocks are engulfed by paper. You lose";
      addPointComputer();
    }
    else if(computChoice === "Scissors" && playChoice === "Paper") {
      outcome.innerHTML = "Paper is shredded by Scissors. You lose";
      addPointComputer();
    }
    else if(computChoice === "Scissors" && playChoice === "Scissors") {
      outcome.innerHTML = "Its a tie!";
    }
    else if(computChoice === "Rock" && playChoice === "Rock") {
      outcome.innerHTML = "Its a tie!";
    }
    else if(computChoice === "Paper" && playChoice === "Paper") {
      outcome.innerHTML = "Its a tie!";
    }
  } 
  
}

function myFocusFunction () {
  input.style.backgroundColor = "yellow"; 
}


// EVENTS

// for(let i=0; i<options.length; i++) {
//   options[i].addEventListener('click', getComputersChoice, false)
// }


// input.addEventListener("focus", myFocusFunction, true);
// input.addEventListener("blur", myBlurFunction, true);
battle.addEventListener('click', getComputersChoice)
battle.addEventListener('click', round)
rock.addEventListener('click', function() {changeColor(rock, paper, scissors);})
rock.addEventListener('click', function() {playersChoice.innerHTML = "Rock"; computersChoice.innerHTML = "...";})
paper.addEventListener('click', function() {changeColor(paper, rock, scissors);})
paper.addEventListener('click', function() {playersChoice.innerHTML = "Paper"; computersChoice.innerHTML = "...";})
scissors.addEventListener('click', function() {changeColor(scissors, rock, paper);})
scissors.addEventListener('click', function() {playersChoice.innerHTML = "Scissors"; computersChoice.innerHTML = "...";})
document.getElementById('playAgainButton').addEventListener('click', resetGame);


