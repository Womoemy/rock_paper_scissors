// My initial game mechanics code
// function game() {
//     let pScore = 0;
//     let cScore = 0;
//     let winner = console.log("Rock, Paper, Scissors!");

//     // Play game
//     const playGame = () => {
//         const playerChoice = prompt("Rock, Paper or Scissors: ").toLowerCase();
//         console.log(`Player: ${playerChoice}`);

//         const computerOptions = ["rock", "paper", "scissors"];
//         const computerNumber = Math.floor(Math.random() * computerOptions.length);
//         const computerChoice = computerOptions[computerNumber];
//         console.log(`Computer: ${computerChoice}`);

//         comparePlays(playerChoice, computerChoice);
//     };

//     // Update the scores after each round
//     const updateScore = () => {
//         console.log(`Player ${pScore} : Computer ${cScore}`);
//     };
    
//     // Compare player and computer selections
//     const comparePlays = (playerChoice, computerChoice) => {
        

//         // Check for tie
//         if(playerChoice === computerChoice) {
//             winner = console.log("It's a tie!");
//             updateScore();
//             return;
//         }
//         // Check for rock
//         if(playerChoice === "rock") {
//             if(computerChoice === "scissors") {
//                 winner = console.log("Player wins!");
//                 pScore++;
//                 updateScore();
//                 return;
//             } else {
//                 winner = console.log("Computer wins!");
//                 cScore++;
//                 updateScore();
//                 return;
//             }
//         }

//         // Check for paper
//         if(playerChoice === "paper") {
//             if(computerChoice === "rock") {
//                 winner = console.log("Player wins!");
//                 pScore++;
//                 updateScore();
//                 return;
//             } else {
//                 winner = console.log("Computer wins!");
//                 cScore++;
//                 updateScore();
//                 return;
//             }
//         }

//         // Check for scissors
//         if(playerChoice === "scissors") {
//             if(computerChoice === "paper") {
//                 winner = console.log("Player wins!");
//                 pScore++;
//                 updateScore();
//                 return;
//             } else {
//                 winner = console.log("Computer wins!");
//                 cScore++;
//                 updateScore();
//                 return;
//             }
//         }
//     };

//     // Determine who wins the game after 5 rounds
//     const declareWinner = (pScore, cScore) => {
//         if(pScore === cScore) {
//             console.log("It's a tie. Nobody wins!");
//         } else if (pScore > cScore) {
//             console.log("Player wins the game!");
//         } else {
//             console.log("Computer wins the game!");
//         }
//     };

//     declareWinner(pScore, cScore);
// }
// game();

// FP Code Mechanics
const buttons = document.querySelectorAll('.pick'); // change querySelector from 'pick' to 'option' later
const scoreEl = document.getElementById('score');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const restart = document.getElementById('restart');

const user_select = document.getElementById('user-select');
const computer_select = document.getElementById('computer-select');

const winner =  document.getElementById('winner');

// modal buttons and stuff
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const modal = document.getElementById('modal');

const choices = ['rock', 'paper', 'scissors'];

let score = 0;
let userChoice = undefined;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');
        // console.log(userChoice);
        checkWinner();
    });
});

restart.addEventListener('click', () => {
    main.style.display = 'flex';
    selection.style.display = 'none';
});

openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

function checkWinner() {
    const computerChoice = pickRandomChoice();

    // update the view
    updateSelection(user_select, userChoice);
    updateSelection(computer_select, computerChoice);


    if(userChoice === computerChoice) {
        // draw
        winner.textContent = 'draw';
        // winner.innerText = 'draw';
    } 
    else if
    (   userChoice === 'paper' && computerChoice === 'rock' ||
        userChoice === 'rock' && computerChoice === 'scissors' ||
        userChoice === 'scissors' && computerChoice === 'paper'
    ) {
        // user won
        updateScore(1);
        winner.textContent = 'win';
        // winner.innerText = 'win';
    } else {
        //user lost
        winner.textContent = 'lose';
        // winner.innerText = 'lose';
    }
    // show the selection | hide main
    main.style.display = 'none';
    selection.style.display = 'flex';
}

function updateScore() {
    score += 1;
    scoreEl.innerText = score;
}

// Computer choice
function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateSelection(selectionEl, choice) {
    // class reset
    selectionEl.classList.remove('rock');
    selectionEl.classList.remove('paper');
    selectionEl.classList.remove('scissors');

    // update the image
    const img = selectionEl.querySelector('img');
    selectionEl.classList.add(`${choice}`);
    img.src = `images/icon-${choice}.svg`;
    img.alt = choice;
}

// Traversy Logic
// const choices = document.querySelectorAll('.choice');
// const score = document.getElementById('score');
// const result = document.getElementById('result');
// const restart = document.getElementById('restart');
// const modal = document.querySelector('.modal');
// const scoreboard = {
//   player: 0,
//   computer: 0
// };

// // Play game
// function play(e) {
//   restart.style.display = 'inline-block';
//   const playerChoice = e.target.id;
//   const computerChoice = getComputerChoice();
//   const winner = getWinner(playerChoice, computerChoice);
//   showWinner(winner, computerChoice);
// }

// // Get computers choice
// function getComputerChoice() {
//   const rand = Math.random();
//   if (rand < 0.34) {
//     return 'rock';
//   } else if (rand <= 0.67) {
//     return 'paper';
//   } else {
//     return 'scissors';
//   }
// }

// // Get game winner
// function getWinner(p, c) {
//   if (p === c) {
//     return 'draw';
//   } else if (p === 'rock') {
//     if (c === 'paper') {
//       return 'computer';
//     } else {
//       return 'player';
//     }
//   } else if (p === 'paper') {
//     if (c === 'scissors') {
//       return 'computer';
//     } else {
//       return 'player';
//     }
//   } else if (p === 'scissors') {
//     if (c === 'rock') {
//       return 'computer';
//     } else {
//       return 'player';
//     }
//   }
// }

// function showWinner(winner, computerChoice) {
//   if (winner === 'player') {
//     // Inc player score
//     scoreboard.player++;
//     // Show modal result
//     result.innerHTML = `
//       <h1 class="text-win">You Win</h1>
//       <i class="fas fa-hand-${computerChoice} fa-10x"></i>
//       <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
//         computerChoice.slice(1)}</strong></p>
//     `;
//   } else if (winner === 'computer') {
//     // Inc computer score
//     scoreboard.computer++;
//     // Show modal result
//     result.innerHTML = `
//       <h1 class="text-lose">You Lose</h1>
//       <i class="fas fa-hand-${computerChoice} fa-10x"></i>
//       <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
//         computerChoice.slice(1)}</strong></p>
//     `;
//   } else {
//     result.innerHTML = `
//       <h1>It's A Draw</h1>
//       <i class="fas fa-hand-${computerChoice} fa-10x"></i>
//       <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
//         computerChoice.slice(1)}</strong></p>
//     `;
//   }
//   // Show score
//   score.innerHTML = `
//     <p>Player: ${scoreboard.player}</p>
//     <p>Computer: ${scoreboard.computer}</p>
//     `;

//   modal.style.display = 'block';
// }

// // Restart game
// function restartGame() {
//   scoreboard.player = 0;
//   scoreboard.computer = 0;
//   score.innerHTML = `
//     <p>Player: 0</p>
//     <p>Computer: 0</p>
//   `;
// }

// // Clear modal
// function clearModal(e) {
//   if (e.target == modal) {
//     modal.style.display = 'none';
//   }
// }

// // Event listeners
// choices.forEach(choice => choice.addEventListener('click', play));
// window.addEventListener('click', clearModal);
// restart.addEventListener('click', restartGame);
