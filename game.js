function game() {
    let pScore = 0;
    let cScore = 0;
    let winner = console.log("Rock, Paper, Scissors!");

    // Play game
    const playGame = () => {
        const playerChoice = prompt("Rock, Paper or Scissors: ").toLowerCase();
        console.log(`Player: ${playerChoice}`);

        const computerOptions = ["rock", "paper", "scissors"];
        const computerNumber = Math.floor(Math.random() * computerOptions.length);
        const computerChoice = computerOptions[computerNumber];
        console.log(`Computer: ${computerChoice}`);

        comparePlays(playerChoice, computerChoice);
    };

    // Update the scores after each round
    const updateScore = () => {
        console.log(`Player ${pScore} : Computer ${cScore}`);
    };
    
    // Compare player and computer selections
    const comparePlays = (playerChoice, computerChoice) => {
        

        // Check for tie
        if(playerChoice === computerChoice) {
            winner = console.log("It's a tie!");
            updateScore();
            return;
        }
        // Check for rock
        if(playerChoice === "rock") {
            if(computerChoice === "scissors") {
                winner = console.log("Player wins!");
                pScore++;
                updateScore();
                return;
            } else {
                winner = console.log("Computer wins!");
                cScore++;
                updateScore();
                return;
            }
        }

        // Check for paper
        if(playerChoice === "paper") {
            if(computerChoice === "rock") {
                winner = console.log("Player wins!");
                pScore++;
                updateScore();
                return;
            } else {
                winner = console.log("Computer wins!");
                cScore++;
                updateScore();
                return;
            }
        }

        // Check for scissors
        if(playerChoice === "scissors") {
            if(computerChoice === "paper") {
                winner = console.log("Player wins!");
                pScore++;
                updateScore();
                return;
            } else {
                winner = console.log("Computer wins!");
                cScore++;
                updateScore();
                return;
            }
        }
    };

    // Determine who wins the game after 5 rounds
    const declareWinner = (pScore, cScore) => {
        if(pScore === cScore) {
            console.log("It's a tie. Nobody wins!");
        } else if (pScore > cScore) {
            console.log("Player wins the game!");
        } else {
            console.log("Computer wins the game!");
        }
    };

    declareWinner(pScore, cScore);
}
game();