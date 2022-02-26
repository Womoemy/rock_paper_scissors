const score_p = document.getElementById('score');
const option_btns = document.querySelectorAll('.option');
const main_div = document.getElementById('main');
const selection_div = document.getElementsByClassName('selection');
const result_span = document.getElementById('winner');
const restart_btn = document.getElementById('restart');

let score = 0;


const userSelect_btn = document.getElementById('user-select');
const compSelect_btn = document.getElementById('computer-select');


// play method to run the game
// function play() {
  
// }

// Get userChoice
option_btns.forEach(choice => {
  choice.addEventListener('click', () => {
    playerChoice = choice.getAttribute('data-choice');  
    updateSelection(userSelect_btn, playerChoice);
    updateSelection(compSelect_btn, computerChoice);
    main_div.style.display = 'none';
    selection_div[0].style.display = 'flex';
  });
});

// Get computer choice
function getComputerChoice() {
  const rand = Math.random();
  if(rand < 0.34){
    return 'rock';
  } else if(rand <= 0.67){
    return 'paper';
  } else {
    return 'scissors';
  }
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

// function showWinner() {
//   const user_select_btn = document.getElementById('user-select');
//   const comp_select_btn = document.getElementById('computer-select');

  
// }
const computerChoice = getComputerChoice();
// updateSelection(userSelect_btn, playerChoice);
// updateSelection(compSelect_btn, computerChoice);