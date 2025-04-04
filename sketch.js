const SCL = 10

var player;
var back;
var gameOver = false;

function setup() {
  createCanvas(600, 600);
  player = new Player(int(width/(2*SCL)), int(height/(2*SCL)));
  back = new Background();
  back.setData();
}

function draw() {
  if (!gameOver) {
    back.draw();
    noStroke();
    player.draw();
    player.update()
  } else {
    fill(255)
    background(0)
    textSize(50)
    text("Game Over", width/2-130, height/2)
  }
}
