const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground;



function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
ground = new Ground(600, 600, 1000, 20);
box1 = new Box(400, 100, 70 ,70);
box2 = new Box(480, 100, 70 ,70);
box3 = new Box(560, 100, 70 ,70);
box4 = new Box(640, 100, 70 ,70);
box5 = new Box(720, 100, 70 ,70);
box6 = new Box(400, 30, 70 ,70);
box7 = new Box(480, 30, 70 ,70);
box8 = new Box(560, 30, 70 ,70);
box9 = new Box(640, 30, 70 ,70);
ball = new Ball(400, 400, 70,70);
chain = new Chain(ball.body,{x:300, y:300});
}

function draw() {
  background(180);
  Engine.update(engine);  
ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
ball.display();
chain.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  chain.fly();
}
function keyPressed(){
  if(keyCode === 32 ){
chain.attach(ball.body);
  }  
}