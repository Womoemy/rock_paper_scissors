const yourScore_span = document.getElementById('yourScore');
const compScore_span = document.getElementById('compScore');
const option_btns = document.querySelectorAll('.option');
const main_div = document.getElementById('main');
const selection_div = document.getElementsByClassName('selection');
const result_span = document.getElementById('winner');
const restart_btn = document.getElementById('restart');

const scoreboard = {
  player: 0,
  computer: 0
};

function play() {
  // const playerChoice = this.getAttribute('data-choice');
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, playerChoice, computerChoice);
}

// Get userChoice
option_btns.forEach(choice => {
  choice.addEventListener('click', () => {
    playerChoice = choice.getAttribute('data-choice');
      
    play();
 
    if (scoreboard.player == 5 || scoreboard.computer == 5) {
      console.log('The game is over, the game is over now!');
    }
  });
});

// Get computer choice
function getComputerChoice() {
  const compChoices = ['rock', 'paper', 'scissors'];
  return compChoices[Math.floor(Math.random() * compChoices.length)];
}

// Get winner
function getWinner(p, c) {
  if (p === c) {
    return 'draw';
  } else if (p === 'rock') {
      if (c === 'paper') {
        return 'computer';
      } else {
        return 'player';
      }
  } else  if (p === 'paper') {
      if (c === 'scissors') {
        return 'player';
      } else {
        return 'computer';
      }
  } else if (p === 'scissors') {
      if (c === 'rock') {
        return 'computer';
      } else {
        return 'player';
      }
  }
}

// Display what the user clicked
function updateSelection(selectedPlay, selection) {
  // remove the class to change the image
  selectedPlay.classList.remove('rock');
  selectedPlay.classList.remove('paper');
  selectedPlay.classList.remove('scissors');

  // update the image by adding the required class
  const img = selectedPlay.querySelector('img');
  selectedPlay.classList.add(`${selection}`);
  img.src = `images/icon-${selection}.svg`;
  img.alt = selection;
}

function showWinner(winner, playerChoice, computerChoice) {
  const userSelect_btn = document.getElementById('user-select');
  const compSelect_btn = document.getElementById('computer-select');

  // update the view on the browser
  updateSelection(userSelect_btn, playerChoice);
  updateSelection(compSelect_btn, computerChoice);

  if(winner === 'player') {
    // user won
    scoreboard.player++;
    result_span.textContent = 'win';
  } else if (winner === 'computer') {
    // user lost
    scoreboard.computer++;
    result_span.textContent = 'lose'; 
  } else {
    // draw
    result_span.textContent = 'draw';
  }
  // show the selection | hide main
  main_div.style.display = 'none';
  selection_div[0].style.display = 'flex';

  yourScore_span.innerText = scoreboard.player;
  compScore_span.innerText = scoreboard.computer;
}

// Play next round
restart_btn.addEventListener('click', () => {
  selection_div[0].style.display = 'none';
  main_div.style.display = 'flex';
});