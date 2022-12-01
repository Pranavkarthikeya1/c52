var canvas,game,player,form,car1,car2,car1_img,car2_img;
var luffy , luffyImage;
var garb, garbImage;
var backgroungImage;
var obstacles1,obstacles1Image,sword,swordImage;
var treasure ,treasureImage;
var dragonball,dragonballImage,dragon,dragonImage;
var database,gameState ;
var players,playerCount ;
var cars=[]
function preload(){
luffyImage = loadAnimation("l1.png","l2.png","l3.png");
garbImage = loadAnimation("g1.png","g2.png","g3.png","g4.png");
dragonImage = loadImage("dragon.png");
dragonballImage = loadImage("dragonball.png");

}

function setup() {
  canvas=createCanvas(800,400);
  database=firebase.database();
 
  game = new Game()
  game .getState()
  game.start()
    
          }


function draw() {

    background(0)
    if (playerCount === 2) {
      game.update(1); }
  
      
          if (gameState === 1) { 
           
            game.play(); } 
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

