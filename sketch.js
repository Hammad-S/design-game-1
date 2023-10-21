//TREX GAME using JS

//Declare variables for game objects and behaviour indicators(FLAGS)
var trex, trexRun, trexDead;
var ground, groundIMG, invGround;
var cloud, cloudIMG, cloudsGroup;
var cactus, cactiGroup, cactus1, cactus2, cactus3, cactus4, cactus5, cactus6;
var gameOver, resetButton, resetIconImg, gameOverImg;
var score, hiScore, displayHS;
var PLAY, END, gameState;
var jumpSound, dieSound, checkPointSound;

//Create Media library and load to use it during the course of the software
//executed only once at the start of the program
function preload() {
  bkIMG = loadImage("./assets/bj1.jpg");
}
function setup() {
  createCanvas(1200, 700);
  bk = createSprite(600, 350, 1200, 700);
  bk.addImage(bkIMG);
  bk.scale = 0.95;
  bk.x = bk.width / 2;
  bk.velocityX = -2;
}
function draw() {
  background("#faf796");
  if (bk.x < 100) {
    bk.x = bk.width / 2;
  }
  drawSprites();
}
