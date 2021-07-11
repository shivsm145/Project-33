const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bg;

function preload()
{
  bg = loadImage("snow3.jpg");
}


function setup() 
{
  engine = Engine.create();
  world = engine.world;
  
  createCanvas(1000,600);
  
  if(frameCount%90 === 0)
  {
   snow = new Snow(random(200,800),random(550,450),0,0);
  
  }
}

function draw() 
{
  background(bg);  
  drawSprites();
  snow.display();;
}

