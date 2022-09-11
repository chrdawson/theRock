function game() {
for (let i = 0; i < 5; i++) {

function gameRound() {
	let playerChoice1 = prompt('Write your choice: rock, paper, scissors.');
	let playerChoice2 = playerChoice1.toLowerCase();
	return(playerChoice2);
};

let playerChoice3 = gameRound();



const computerChoice = Math.random();



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





function winner() {
if (playerChoice3 === computerChoice3) {
	alert("The computer also chose " + computerChoice3 + ". It is a tie!");
} else if (playerChoice3 == "scissors" & computerChoice3 == "rock") {
  alert("The computer chose " + computerChoice3 + ". You lost. Sorry.");
} else if (playerChoice3 == "rock" & computerChoice3 == "scissors") {
  alert("The computer chose " + computerChoice3 + ". You won. Congratulations!");
} else if (playerChoice6 > computerChoice) {
	alert("The computer chose " + computerChoice3 + ". You won. Congratulations!");
} else if (playerChoice6 < computerChoice) {
	alert("The computer chose " + computerChoice3 + ". You lost. Sorry.");
} else if (playerChoice1 === computerChoice3) {
	alert("The also computer chose " + computerChoice3 + ". It is a tie!");
}
};

winner(playerChoice6);


function roundTracking() {
	if (i == 0) {
		alert("You have completed the first of five rounds. Play again");
	} else if (i == 1) {
		alert("You have completed the second of five rounds. Play again");
	} else if (i == 2) {
		alert("You have completed the third of five rounds. Play again");
	} else if (i == 3) {
		alert("You have completed the fourth of five rounds. Play again");
	} else if (i = 4) {
		alert("You have completed the fifth of five rounds. Thank you for playing. Good bye!");
	} else {
		alert("How are you still here?")
	}
};
roundTracking();

}};


game();