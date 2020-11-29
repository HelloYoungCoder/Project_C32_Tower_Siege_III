//Project 31: Tower Siege - III

//Namespacing to refer objects from matter.js library

const {Engine, World, Bodies, Body, Constraint} = Matter;

//Creating variables

var myengine, myworld;
var ground;

var stand1;
var stand2;

var block1, block2, block3, block4, block5;
var block6, block7, block8, block9, block10;
var block11, block12, block13, block14, block15;
var block16, block17, block18, block19, block20;
var block21, block22, block23, block24, block25;

var block1a, block2a, block3a, block4a, block5a;
var block6a, block7a, block8a, block9a, block10a;
var block11a, block12a, block13a, block14a, block15a, block16a;

var strikerPos, strikerImg;

var launch;

var score = 0;

var bgColor = "";

function preload(){
  strikerImg = loadImage("Stricker.png");

  getBackground();

}

function setup() {
  createCanvas(1200,600);

  //Creating engine & world

  myengine = Engine.create();
  myworld = myengine.world;

  //Creating Ground
  ground = new Ground(600, height, 1200, 20);

  //Creating stand - I
  stand1 = new Ground(600, 400, 250, 15);

  //Creating blocks - I
  block1 = new Block(500,385,25,40);
  block2 = new Block(525,385,25,40);
  block3 = new Block(550,385,25,40);
  block4 = new Block(575,385,25,40);
  block5 = new Block(600,385,25,40);
  block6 = new Block(625,385,25,40);
  block7 = new Block(650,385,25,40);
  block8 = new Block(675,385,25,40);
  block9 = new Block(700,385,25,40);

  block10 = new Block(525,320,25,40);
  block11 = new Block(550,320,25,40);
  block12 = new Block(575,320,25,40);

  block13 = new Block(600,320,25,40);

  block14 = new Block(625,320,25,40);
  block15 = new Block(650,320,25,40);
  block16 = new Block(675,320,25,40);

  block17 = new Block(550,255,25,40);
  block18 = new Block(575,255,25,40);
  block19 = new Block(600,255,25,40);
  block20 = new Block(625,255,25,40);
  block21 = new Block(650,255,25,40);

  block22 = new Block(575,190,25,40);
  block23 = new Block(600,190,25,40);
  block24 = new Block(625,190,25,40);

  block25 = new Block(600,125,25,40);

  // Creating stand - II
  stand2 = new Ground(950, 300, 200, 15);

  // Creating blocks - II

  block1a = new Block(875,285,25,40);
  block2a = new Block(900,285,25,40);
  block3a = new Block(925,285,25,40);
  block4a = new Block(950,285,25,40);
  block5a = new Block(975,285,25,40);
  block6a = new Block(1000,285,25,40);
  block7a = new Block(1025,285,25,40);

  block8a = new Block(900,220,25,40);
  block9a = new Block(925,220,25,40);
  block10a = new Block(950,220,25,40);
  block11a = new Block(975,220,25,40);
  block12a = new Block(1000,220,25,40);

  block13a = new Block(925,155,25,40);
  block14a = new Block(950,155,25,40);
  block15a = new Block(975,155,25,40);

  block16a = new Block(950,90,25,40);

  // Creating rectangular body
  striker = Bodies.rectangle(200, 320, 70, 70);
  World.add(myworld, striker);

  //Creating launch
  launch = new Launcher(striker, {x: 150, y: 320})

}

function draw() {

  //Clear the screen
  if(getBackground()){
    background(bgColor); 
  }
  

  //Set text size & font
  fill(29, 26, 51);
  textSize(20);
  textFont("Trebuchet MS");

  //Displaying Text
  text("Drag the Hexagonal Stone & Release to Launch it Towards the Blocks",350,30);

  text(15);
  text("Press Space to Relaunch it",900,530);

  //Updating engine
  Engine.update(myengine); 

  //Displaying the objects
  ground.display();

  stand1.display();

  fill(59, 73, 130);
  block1.display();
  block2.display();
  block3.display();

  fill(66, 138, 105);
  block4.display();
  block5.display();
  block6.display();

  fill(59, 73, 130);
  block7.display();
  block8.display();
  block9.display();

  fill(136, 73, 153);
  block10.display();
  block11.display();
  block12.display();

  fill(66, 138, 105);
  block13.display();

  fill(136, 73, 153);
  block14.display();
  block15.display();
  block16.display();

  fill(59, 73, 130);
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  fill(66, 138, 105);
  block22.display();
  block23.display();
  block24.display();

  block25.display();

  stand2.display();

  fill(59, 73, 130);
  block1a.display();
  block2a.display();

  fill(66, 138, 105);
  block3a.display();
  block4a.display();
  block5a.display();

  fill(59, 73, 130);
  block6a.display();
  block7a.display();

  block8a.display();
  block9a.display();
  block10a.display();
  block11a.display();
  block12a.display();

  fill(66, 138, 105);

  block13a.display();
  block14a.display();
  block15a.display();

  block16a.display();

  //Assigning position
  strikerPos = striker.position;

  //Creating Image
  imageMode(CENTER);
  image(strikerImg, strikerPos.x, strikerPos.y, 70, 70);

  //Making the launcher
  launch.display();

  //Displaying Score
  text("Score : "+score, 1050, 70);
}

function mouseDragged(){
  Body.setPosition(this.striker,{ x: mouseX, y: mouseY});
}

function mouseReleased(){
  launch.fly();
}

function keyPressed(){

  if (keyCode === 32){
    Body.setPosition(this.striker,{ x: 200, y: 320});
    launch.attach(this.striker);
  }

}

async function getBackground(){

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseType = await response.json();

  var dt = responseType.datetime;
  var hour = dt.slice(11,13);

  if (hour >= 06 && hour <= 18) {
    bgColor = "powderblue";
  } else {
    bgColor = "sienna";
  }

}