const playerScore = document.getElementById("playerScore");
const outcome = document.getElementById("outcome");
const computerOptions = ["rock", "paper", "scissors"];
const computersChoice = document.getElementById("computersChoice");

// BUTTONS
const rock = document.getElementById("rock");

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

rock.addEventListener('click', getComputersChoice)



