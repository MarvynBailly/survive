let game;
  
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  
  const gameSize  = min(windowWidth, windowHeight) * 0.75;
  const gamePos = createVector((width - gameSize) / 2, (height - gameSize) / 2);
  game = new Game(gamePos, gameSize);
  game.start();
}

function draw() {
  background(50);
  game.update();
  game.render();
}




