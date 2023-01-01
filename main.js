const NUM_SQUARES = 100;
const NUM_PLAYERS = 4;

const board = document.getElementById('board');
const diceButton = document.getElementById('roll-dice-button');

let players = [];

// Create the board
for (let i = 0; i < NUM_SQUARES; i++) {
  let square = document.createElement('div');
  square.classList.add('square');
  board.appendChild(square);
}

// Create the players
for (let i = 0; i < NUM_PLAYERS; i++) {
  let player = {
    position: 0,
    color: getColor(i),
  };
  players.push(player);
}

// Add a click event listener to the dice button
diceButton.addEventListener('click', () => {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`You rolled a ${roll}`);

  // Update the player's position
  players[0].position += roll;
  if (players[0].position >= NUM_SQUARES) {
    players[0].position -= NUM_SQUARES;
  }

  // Update the board
  updateBoard();
});

function updateBoard() {
  // Reset the board
  let squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.innerHTML = '';
  });

  // Add the players to the board
  players.forEach(player => {
    let square = document.querySelectorAll('.square')[player.position];
    square.innerHTML = `<div class="${player.color}"></div>`;
  });
}

function getColor(index) {
  switch (index) {
    case 0:
      return 'red';
    case 1:
      return 'yellow';
    case 2:
      return 'green';
    case 3:
      return 'blue';
  }
}
