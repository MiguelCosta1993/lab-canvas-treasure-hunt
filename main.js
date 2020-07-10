// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;
const row_count = 10;

// Iteration 1
function drawGrid() {
  for (let width = 0; width < 10; width++) {
    for (let height = 0; height < 10; height++) {
      context.strokeStyle = 'black';
      context.strokeRect(width * 50, height * 50, 50, 50);
    }
  }
}

class Character {
  constructor(row, col) {
    this.col = col;
    this.row = row;
  }
  moveUp() {
    return this.col--;
  }
  moveDown() {
    return this.col++;
  }
  moveRight() {
    return this.row++;
  }
  moveLeft() {
    return this.row--;
  }
}

const player = new Character(0, 0);

function drawPlayer() {
  let imagem = new Image();
  imagem.src = '/images/character-down.png';
  imagem.addEventListener('load', () => {
    context.drawImage(imagem, player.row * 50, player.col * 50, 50, 50);
  });
}

class treasure {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  setRandomPosition() {
    return (
      (this.row = Math.floor(Math.random() * 10)),
      (this.col = Math.floor(Math.random() * 10))
    );
  }
}
const pickUp = new Treasure(5, 3);

function drawTreasure() {
  const imagem = new Image();
  imagem.src = '/images/treasure.png';
  imagem.addEventListener('load', () => {
    context.drawImage(imagem, treasure.row * 50, treasure.col * 50, 50, 50);
    if (player.row === pickUp.row && player.col === pickUp.col) {
      pickUp.setRandomPosition();
      drawEverything();
      context.clearRect(0, 0, width, height);
    }
  });
}

/*const player = new Character(0, 0);
player.moveDown();
player.moveDown();
player.moveRight();
console.log(player.row, player.col);*/

/*context.strokeStyle = 'black';
  context.lineWidth = '2';
  const background = context.strokeRect(0, 0, width / rows, height / 10);
  const backgroundPattern = context.createPattern(background, 'repeat');
  context.fillStyle = backgroundPattern;
  context.fillRect(0, 0, canvas.width, canvas.height);*/

function drawEverything() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid();
  drawPlayer();
  drawTreasure();
}

drawEverything();
