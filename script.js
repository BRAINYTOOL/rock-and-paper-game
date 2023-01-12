
let playerPoint = 0
let computerPoint = 0

function playARound() { 
    let playerSelect = prompt("please enter your symbol"," ");
    let playerSelection = playerSelect.toUpperCase()
    console.log (playerSelection)
    function computerChoice () { 
        let randomSelect = Math.floor(Math.random()*3) + 1
        if (randomSelect=== 1) {return "ROCK"}
        else if (randomSelect=== 2) {return "PAPER"}
        else { return "SCISSORS"};}
 computerChoice ();
    let getComputerChoice = computerChoice ()
if ( playerSelection === getComputerChoice) {
  alert("That's a tie! Play another round")
  playARound ()}
  else if ( playerSelection === "ROCK" && getComputerChoice === "PAPER") {
    alert("You lose! Paper beats Rock")
  return computerPoint++}
  else if ( playerSelection === "PAPER" && getComputerChoice === "ROCK") {
    alert("You win! Paper beats Rock")
    return playerPoint++}
  else if ( playerSelection === "PAPER" && getComputerChoice === "SCISSORS") {
    alert("You lose! Scissors beats paper")
    return computerPoint++}
  else if ( playerSelection === "SCISSORS" && getComputerChoice === "PAPER") {
    alert("You win! Scissors beats paper")
    return playerPoint++}
  else if ( playerSelection === "ROCK" && getComputerChoice === "SCISSORS") {
    alert("You win! Rock beats Scissors")
    return playerPoint++}
  else if ( playerSelection === "SCISSORS" && getComputerChoice === "ROCK") {
    alert("You lose! Rock beats Scissors")
    return computerPoint++}
  else { 
    alert("please enter correct symbols")
    playARound ()};
}


function checkWinner () {
  if (playerPoint < computerPoint) {
    alert("You lost this game")
  } else{
    alert("Congratulations! 🏆 you won")
  }
}

for (let i = 0; i < 5; i++) {
playARound()
}

function scoreBoard () {
  alert(`Your points: ${playerPoint}
Computer points: ${computerPoint}`)
checkWinner()

}

scoreBoard()