const playerScore = document.getElementById("playerScore");
const outcome = document.getElementById("outcome");
const computerOptions = ["rock", "paper", "scissors"];
const computersChoice = document.getElementById("computersChoice");

// BUTTONS
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let scorePlayer = 0;
let computChoice = " ";
// functions

function addOne() {
    scorePlayer++
    playerScore.innerHTML = scorePlayer;
    outcome.innerHTML = "You Won!"
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function getComputersChoice() {
    computChoice = computerOptions[getRndInteger(0, 2)];
    computersChoice.innerHTML = computChoice;
}

function changeColor (x, y, z) { 
  x.style.backgroundColor = "lightblue";
  y.style.backgroundColor = "lightgrey";
  z.style.backgroundColor = "lightgrey";
}

// EVENTS

rock.addEventListener('click', getComputersChoice)
rock.addEventListener('click', function() {changeColor(rock, paper, scissors);})
paper.addEventListener('click', function() {changeColor(paper, rock, scissors);})
scissors.addEventListener('click', function() {changeColor(scissors, rock, paper);})


