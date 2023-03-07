let playerPoint = document.getElementById('plyScore').textContent = 0;
let computerPoint = document.getElementById('compScore').textContent = 0;


function playARound(value) {
 

  let playerSelection = value
console.log(playerSelection)
function computerChoice () { 
    let randomSelect = Math.floor(Math.random()*3) + 1
    if (randomSelect=== 1) { return "ROCK"}
    else if (randomSelect=== 2) {return "PAPER"}
    else { return "SCISSORS"};}
computerChoice ();
let getComputerChoice = computerChoice()
document.getElementById("comBtn").textContent = getComputerChoice
if ( playerSelection === getComputerChoice) {
document.getElementById("comment").textContent = "That's a tie! Play another round"
}
else if ( playerSelection === "ROCK" && getComputerChoice === "PAPER") {
document.getElementById("comment").textContent = "You lose! Paper beats Rock"
computerPoint = computerPoint + 1;
document.getElementById('compScore').textContent = computerPoint}
else if ( playerSelection === "PAPER" && getComputerChoice === "ROCK") {
document.getElementById("comment").textContent = "You win! Paper beats Rock"
playerPoint = playerPoint + 1;
document.getElementById('plyScore').textContent = playerPoint}
else if ( playerSelection === "PAPER" && getComputerChoice === "SCISSORS") {
document.getElementById("comment").textContent = "You lose! Scissors beats paper"
computerPoint = computerPoint + 1;
document.getElementById('compScore').textContent = computerPoint}
else if ( playerSelection === "SCISSORS" && getComputerChoice === "PAPER") {
document.getElementById("comment").textContent = "You win! Scissors beats paper"
playerPoint = playerPoint + 1;
document.getElementById('plyScore').textContent = playerPoint}
else if ( playerSelection === "ROCK" && getComputerChoice === "SCISSORS") {
document.getElementById("comment").textContent = "You win! Rock beats Scissors"
playerPoint = playerPoint + 1;
document.getElementById('plyScore').textContent = playerPoint}
else if ( playerSelection === "SCISSORS" && getComputerChoice === "ROCK") {
document.getElementById("comment").textContent = "You lose! Rock beats Scissors"
computerPoint = computerPoint + 1;
document.getElementById('compScore').textContent = computerPoint}
checkWinner ();

}



function checkWinner () {
if (playerPoint === 5) { openNav(); 
document.getElementById("overlay-content").innerHTML ="Congratulations! You won"} 
else if ( computerPoint === 5)
{openNav();
  document.getElementById("overlay-content").innerHTML ="Sorry you lost to Computer"
} 
}


openNav = () => {
  document.getElementById("myNav").style.height = "100%";
}
















