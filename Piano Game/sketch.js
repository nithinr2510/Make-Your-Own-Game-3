var backgroundimg,tileimg,startimg,GameOverimg;
 
function preload() {
  backgroundimg=loadImage("images/Background.png");
  tileimg=loadImage("images/Tile.jpg");
  startimg=loadImage("images/Starttile.jpg");
  GameOverimg=loadImage("images/GameOver.jpg");
}

function setup() {
  createCanvas(1200,800);
 
}

 

function draw() {
  background(backgroundimg);
  
     drawSprites();
}
function drawline() {
 
}