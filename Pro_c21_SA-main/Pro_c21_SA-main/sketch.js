const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var up;
var direita;
var ground;
var left;
var right;
var top_wall;
var bola;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  up = createImg("up.png");
  up.position(20,30);
  up.size(50,50);
  up.mouseClicked(top);
  direita = createImg("right.png");
  direita.position(220,30);
  direita.size(50,50);
  direita.mouseClicked(righti);
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  var bola_options={
    restitution:0.95
  }
  bola = Bodies.circle(200,100,20,bola_options);
   World.add(world,bola);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ellipse(bola.position.x,bola.position.y,20);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}

function top(){
  Matter.Body.applyForce(bola,{x:0,y:0},{x:0,y:-0.05});
}
function righti(){
  Matter.Body.applyForce(bola,{x:0,y:0},{x:0.05,y:0});
}