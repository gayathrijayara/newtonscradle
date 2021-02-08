
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobobject1,bobobject2,bobobject3, bobobject4,bobobject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;
var startbobpositionx,startbobpositiony;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	startbobpositionx=width/2
	startbobpositiony=height/4+500
	bobdiameter=40
	bobobject1 = new Bob(startbobpositionx-bobdiameter*2,startbobpositiony,bobdiameter)
	bobobject2 = new Bob(startbobpositionx-bobdiameter,startbobpositiony,bobdiameter)
	bobobject3=new Bob(startbobpositionx,startbobpositiony,bobdiameter);
	bobobject4=new Bob(startbobpositionx+bobdiameter,startbobpositiony,bobdiameter); 
	bobobject5=new Bob(startbobpositionx+bobdiameter*2,startbobpositiony,bobdiameter);
    roofObject=new Roof(width/2,height/4,width/7,20);
    rope1=new Rope(bobobject1.body,roofObject.body,-bobdiameter*2, 0)
    rope2=new Rope(bobobject2.body,roofObject.body,-bobdiameter*1, 0) 
    rope3=new Rope(bobobject3.body,roofObject.body,0, 0) 
    rope4=new Rope(bobobject4.body,roofObject.body,bobdiameter*1, 0) 
    rope5=new Rope(bobobject5.body,roofObject.body,bobdiameter*2, 0)
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });	
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
rope1.display() 
rope2.display() 
rope3.display() 
rope4.display() 
rope5.display() 
bobobject1.display();
bobobject2.display(); 
bobobject3.display(); 
bobobject4.display(); 
bobobject5.display();
roofObject.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobobject1.body,bobobject1.body.position,{x:-50,y:-45});

	}
}


function drawLine(constraint)
{
  bobBodyPosition=constraint.bodyA.position
  roofBodyPosition=constraint.bodyB.position

  roofBodyOffset=constraint.pointB;
  
  roofBodyX=roofBodyPosition.x+roofBodyOffset.x
  roofBodyY=roofBodyPosition.y+roofBodyOffset.y
  line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}


