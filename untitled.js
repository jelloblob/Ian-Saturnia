function computerThink(){
	computerChoice = Math.floor(Math.random()*3);
	if(computerChoice === 1){
		computerChoice = "rock";
}
else if(computerChoice === 2){
	computerChoice = "scissors";	
}
else{
	computerChoice = "paper";
	}
}

function rockPick(){
	userChoice = "rock";
	computerThink();
	results();
	replay();
}

function paperPick(){
	userChoice = "paper";
	computerThink();
	results();
	replay();
}

function scissorsPick(){
	userChoice = "scissors";
	computerThink();
	results();
	replay();
}

function results() {
	alert("you chose" + userChoice);
	alert("Computer chose" + computerChoice);
	compare(userChoice, computerChoice);
}
	
function compare(choice1,choice2) {
	if (choice1 === choice2) {
	alert("The result is a tie!");
	}
} 