const Engine1 = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world
var ball1,ground

function setup() {
  createCanvas(400,400);
  engine = Engine1.create()
  world = engine.world
  var options = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,380,800,50,options)
  var ball_physics = {
    restitution : 1.0
  }
  ball = Bodies.circle(200,200,20,ball_physics)
  World.add(world,ground)
  World.add(world,ball)
}

function draw() {-
  background(255,255,255);
  Engine1.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,50)
  fill("blue")
  circle(ball.position.x,ball.position.y,50,50)
  drawSprites();
}