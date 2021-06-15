var canvas, backgroundImage;

var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var formBackground;
var gameBackground;

var ship1, ship2, ship3, ship4;
var ships;

// the preload function
function preload(){
  formBackground = loadImage("images/loginbackgr.jpg");
  gameBackground = loadImage("images/outers.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
 // finishedPlayers = 0;
  yVel = 0;
  xVel = 0;

  xSet = false;
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
   //start the game
   background(formBackground);

   //start the game
   if (playerCount === 4 ) {
     game.update(1);
     //fill('yellow');
     //textSize(35);
     //text("all players joined", displayWidth/2 - 225, displayHeight/2 - 100);
     background(gameBackground);
   }
   else
   {
     fill('yellow');
     textSize(35);
     text("Waiting for others players" , displayWidth/2 - 200, displayHeight/2 - 200);
     text("no of players:- " + playerCount, displayWidth/2 - 50, displayHeight/2 - 100);
   }
 
   //start the game for real
   if (gameState === 1) {
     game.play();
   }
   if (gameState === 2) {
     console.log("End");
   }
  }