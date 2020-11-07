var hypnoticBall, database;
var position;
var game, form, player, playerCount=0, gameState=0;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(windowWidth, windowHeight);

 game= new Game();
 game.getState();
 game.start();
}

