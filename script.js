
function getComputerChoice() {
	const num = Math.random();
	if (num < 1 / 3) {
		return 'rock';
	}
	else if (num < 2 / 3) {
		return 'paper';
	}
	else {
		return 'scissors';
	}
}

function getHumanChoice() {
	const choice = prompt("Enter Choice: ");
	return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

	humanChoice = humanChoice.toLowerCase();

	if (
		(humanChoice === "rock" && computerChoice === "scissors") ||
		(humanChoice === "scissors" && computerChoice === "paper") ||
		(humanChoice === "paper" && computerChoice === "rock")
	) {
		humanScore += 1;
	}
	else {
		computerScore += 1;
	}

	console.log("Human Score: " + humanScore);
	console.log("Computer Score: " + computerScore);
}

function playGame(rounds) {
	for (i = 0; i < rounds; ++i) {
		const humanChoice = getHumanChoice();
		const computerChoice = getComputerChoice();

		playRound(humanChoice, computerChoice)
	}
}

const rounds = prompt("Enter number of rounds to play");
playGame(rounds);

