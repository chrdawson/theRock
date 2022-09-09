//ask player for their choice: rock, paper, or scirrors
//program randomonly selects Computer's choice of the three
//compare results:
// let rock beat scissors
// let paper beat rock
// let rock beat scissors
// let scissors beat paper

// if Player's choice greater, Player wins
// else Computer's choice better, Computer wins
// if tie: try again

// invite to Play Again

function gameRound() {
	let playerChoice1 = prompt('Write your choice: rock, paper, scissors.');
	let playerChoice2 = playerChoice1.toLowerCase();
	return(playerChoice2);
};

let playerChoice3 = gameRound();



const computerChoice = Math.random();
console.log(computerChoice);



function computerAnswer() {
if (computerChoice <= 0.333333333333333333333333333){
	let computerChoice2 = "rock";
	return(computerChoice2);
} else if (computerChoice <= 0.666666666666666666666666666){
	let computerChoice2 = "paper";
	return(computerChoice2);
} else if (computerChoice <= 0.999999999999999999999999999){
	let computerChoice2 = "scissors";
	return(computerChoice2);
}
};

computerAnswer(computerChoice);

let computerChoice3 = computerAnswer();




function numericalPlayerAnswer() {
	
	if (playerChoice3 == "rock") {
		let playerChoice5 = 0.3333333333333333;
		return(playerChoice5);
	}
	else if (playerChoice3 == "paper") {
		let playerChoice5 = 0.6666666666666666;
		return(playerChoice5);
	}
	else if (playerChoice3 == "scissors") {
		let playerChoice5 = 0.9999999999999999;
		return(playerChoice5);
	}
};


numericalPlayerAnswer(playerChoice3);

let playerChoice6 = numericalPlayerAnswer();
console.log(playerChoice6);
