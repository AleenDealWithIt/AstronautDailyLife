var brushing,brushingImg;
var sleeping,sleepingImg;
var eating,eatingImg;
var gym,gymImg;
var drinking,drinkingImg;
var move,movingImg;
var bath,bathImg;
var iss,issImg;

function preload(){

  issImg = loadImage("iss.png");
  sleepingImg = loadAnimation("sleep.png");
  brushingImg = loadAnimation("brush.png");
  gymImg = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  eatingImg = loadAnimation("eat1.png","eat1.png","eat2.png","eat2.png");
  drinkingImg = loadAnimation("drink1.png","drink1.png","drink2.png","dring2.png");
  movingImg = loadAnimation("move.png","move.png","move1.png","move1.png");
  bathImg = loadAnimation("bath1.png","bath1.png","bath2.png","bath2.png");
}




function setup() {
  createCanvas(800,400);
  
  var astronaut = createSprite(300,230);
  astronaut.addAnimation = ("sleeping",sleepingImg);
  astronaut.scale = 0.1;
}

function draw() {
  background(issImg);
  textSize(20);
  fill("white");
  text("Instructions",20,35);
  textSize(15);
  text("Up arrow= brushing",20,55);
  text("Down arrow= gymming",20,70);
  text("Left arrow= eating",20,85);
  text("Right arrow = bathing",20,100);
  text("m= moving",20,115);

  
  

  if(keyDown("UP_ARROW")){

    astronaut.addAnimation("brushing",brushingImg);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){

    astronaut.addAnimation("gym",gymImg);
    astronaut.y = 320;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")){

    astronaut.addAnimation("bath",bathImg);
    astronaut.changeAnimation("bath");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  
  if(keyDown("LEFT_ARROW")){

    astronaut.addAnimation("eating",eatingImg);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.x = 150;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }

  if(keyDown("m")){

    astronaut.addAnimation("move",movingImg);
    astronaut.changeAnimation("move");
    astronaut.y = 400;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

  if(keyDown("z")){

    astronaut.addAnimation("drinking",drinkingImg);
    astronaut.changeAnimation("drinking");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  
  edgeSprites();
  astronaut.bounceOff(edges);
  drawSprites();
}