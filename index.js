const playerScore = document.getElementById("playerScore");
const outcome = document.getElementById("outcome");
const computerOptions = ["Rock", "Paper", "Scissors"];
const computersChoice = document.getElementById("computersChoice");
const playersChoice = document.getElementById("playersChoice")
const battle = document.getElementById("battle");

// BUTTONS
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const options = document.querySelectorAll("#rock, #paper, #scissors");

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

// for(let i=0; i<options.length; i++) {
//   options[i].addEventListener('click', getComputersChoice, false)
// }

battle.addEventListener('click', getComputersChoice)
rock.addEventListener('click', function() {changeColor(rock, paper, scissors);})
rock.addEventListener('click', function() {playersChoice.innerHTML = "Rock";})
paper.addEventListener('click', function() {changeColor(paper, rock, scissors);})
paper.addEventListener('click', function() {playersChoice.innerHTML = "Paper";})
scissors.addEventListener('click', function() {changeColor(scissors, rock, paper);})


